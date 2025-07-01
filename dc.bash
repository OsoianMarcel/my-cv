#!/bin/bash

farg="$1"
shift;

dcDev() {
  docker compose -p marcel-dev -f docker-compose.yml -f docker-compose.dev.yml "$@"
}

dcProd() {
  docker compose -p marcel-prod -f docker-compose.yml -f docker-compose.prod.yml "$@"
}

printHelp() {
  echo -e "\nUsage: ./dc COMMAND\n"
  echo -e "Docker Compose Helper\n"
  echo "Commands:"
  echo -e "dev\t\t\tDev docker compose"
  echo -e "dev:logs\t\tWatch logs"
  echo -e "dev:npm\t\t\tNPM package manager"
  echo -e "dev:service:recreate\tRecreates the service"
  echo -e "prod\t\t\tProd docker compose"
}

case $farg in
"dev")
  dcDev "$@"
  ;;

"dev:logs")
  dcDev logs -f --tail 10 "$@"
  ;;

"dev:npm")
  dcDev run -it --rm --no-deps marcel-app npm "$@"
  ;;

"dev:service:recreate")
  dcDev rm -sf "$@" && dcDev up -d "$@"
  ;;

"prod")
  dcProd "$@"
  ;;

*)
  printHelp
  ;;
esac
