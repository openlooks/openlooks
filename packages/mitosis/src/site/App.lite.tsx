import AppShell from '../components/AppShell/AppShell.lite';
import Route from '../components/Route/Route.lite';
import Router from '../components/Router/Router.lite';
import AppShellPage from './pages/AppShellPage.lite';
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
      </AppShell>
    </Router>
  );
}
