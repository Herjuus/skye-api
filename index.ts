import skyeserver from "./lib/skyeapi";

const skye = new skyeserver;
skye.name = "api";
skye.port = 8000;

skye.start()