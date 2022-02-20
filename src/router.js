import { createWebHistory, createRouter } from 'vue-router';


import home from './components/home.vue'
import login from './components/login.vue'
//import register from './components/register.vue'
import Prof from './components/Prof.vue'
import Etudiant from './components/Etudiant.vue'
import Contact from './components/Contact.vue'
import admin from './components/admin.vue'
//import DashBoard from './components/DashBoard.vue'
import gestion_users from './components/gestion_users.vue'
import Prof_DashBoard from './components/Prof_DashBoard.vue'
import Prof_Pfe from './components/Prof_Pfe.vue'
import ProfEmploi from './components/ProfEmploi.vue'

import EtudiantPfe from './components/EtudiantPfe.vue'
import EtudiantEmploi from './components/EtudiantEmploi.vue'
import EtudiantDashboard from './components/EtudiantDashboard.vue'
import Calendrier from './components/AdminCalendrier.vue'

const routes = [
	{   path: '/', name: 'home', component: home },
	{   path: '/login', name: 'login', component: login },
	{   path: '/admin', name: 'admin', component: admin },
	{   path: '/gestion_users', name: 'gestion_users', component: gestion_users },
	{   path: '/Calendrier', name: 'Calendrier', component: Calendrier },

	{   path: '/Prof', name: 'Prof', component: Prof },
	{   path: '/Prof_DashBoard', name: 'Prof_DashBoard', component: Prof_DashBoard },
	{   path: '/Prof_Pfe', name: 'Prof_Pfe', component: Prof_Pfe },
	{   path: '/ProfEmploi', name: 'ProfEmploi', component: ProfEmploi },

	{   path: '/Etudiant', name: 'Etudiant', component: Etudiant },
	{   path: '/EtudiantPfe', name: 'EtudiantPfe', component: EtudiantPfe },
	{   path: '/EtudiantDashboard', name: 'EtudiantDashboard', component: EtudiantDashboard },
	{   path: '/EtudiantEmploi', name: 'EtudiantEmploi', component: EtudiantEmploi },

	{   path: '/Contact', name: 'Contact', component: Contact },

	//{   path: '/register', name: 'register', component: register },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
