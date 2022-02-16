import { createApp, compile } from "vue";
import HomeTitle from "./pages/home";

createApp({
   data: HomeTitle.data,
   render: HomeTitle.render,
   
}).mount("#app");

