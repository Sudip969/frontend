import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./components/DashBoard.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import TeamComponent from "./components/TeamComponent.vue";
import SignUp from "./authorisation/SignUp.vue";
import LogIn from "./authorisation/LogIn.vue";
import TheHeader from "./header/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LogIn },
    { path: "/signup", component: SignUp },
    {
      path: "/the-header",
      component: TheHeader,
      children: [
        { path: "dashboard", component: DashBoard },
        { path: "projectcomponent", component: ProjectComponent },
        { path: "teamcomponent", component: TeamComponent },
      ],
    },
  ],
});

export default router;
