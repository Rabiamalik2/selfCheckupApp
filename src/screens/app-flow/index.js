
import DashboardScreen from './dashboard-screen';
import DoctorInfoScreen from './doctor-info-screen';
import MedicoreInfoScreen from './medicare-info-screen';
import SettingScreen from './setting-screen';
import HealthEduScreen from './health-education-screen';
import LiveActivityScreen from './live-activity-screen';
import YogaActivityScreen from './yoga-activity-screen';
import ChatGptScreen from './chatgpt-screen';
import FunEduScreen from './fun-edu-screen';
import SelfCheckupScreen from './self-checkup-screen';
import SosScreen from './sos-screen';
import VitalSignsScreen from './vital-sign-screen';
import QuestionaireScreen1 from './questionaire-screen';
import EmergencyContactScreen from './emergency-contact-screen';
import AddContactScreen from './add-contact-screen';
import PersonalInfoScreen from './personal-info';

const AppRoutes = {

  DashboardScreen,
  DoctorInfoScreen,
  MedicoreInfoScreen,
  SettingScreen,
};
const FunNavRoutes = {
  HealthEduScreen,
  LiveActivityScreen,
  YogaActivityScreen,
};
const SelfCheckNavRoutes = {
  QuestionaireScreen1,
};
const TabNavRoutes = {
  ChatGptScreen,
  FunEduScreen,
  SelfCheckupScreen,
  SosScreen,
  VitalSignsScreen,
};

const SosNavRoutes = {
  EmergencyContactScreen,
  AddContactScreen,
  PersonalInfoScreen,
};

export default {
  AppRoutes,
  FunNavRoutes,
  SelfCheckNavRoutes,
  TabNavRoutes,
  SosNavRoutes,
};
