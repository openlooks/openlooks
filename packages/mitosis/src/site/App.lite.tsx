import AppShell from '../components/AppShell.lite';
import Route from '../components/Route.lite';
import Router from '../components/Router.lite';
import AppShellPage from './pages/AppShellPage.lite';
import ButtonPage from './pages/ButtonPage.lite';
import GroupPage from './pages/GroupPage.lite';
import HomePage from './pages/HomePage.lite';
import SiteHeader from './SiteHeader.lite';
import SiteNav from './SiteNav.lite';

import './index.css';

export default function App() {
  return (
    <Router>
      <AppShell slotHeader={<SiteHeader />} slotNavbar={<SiteNav />}>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/appshell">
          <AppShellPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/group">
          <GroupPage />
        </Route>
      </AppShell>
    </Router>
  );
}
