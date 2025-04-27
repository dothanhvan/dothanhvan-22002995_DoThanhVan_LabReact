import "./AdminPage.css";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import ProjectsNav from "../../components/ProjectsNav/ProjectsNav";
import TeamsNav from "../../components/TeamsNav/TeamsNav";
import AnalyticsNav from "../../components/AnalyticsNav/AnalyticsNav";
import MessagesNav from "../../components/MessagesNav/MessagesNav";
import IntegrationsNav from "../../components/IntegrationsNav/IntegrationsNav";

function AdminPage() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Content />}></Route>
          <Route path="/Projects" element={<ProjectsNav />}></Route>
          <Route path="/Teams" element={<TeamsNav />}></Route>
          <Route path="/Analytics" element={<AnalyticsNav />}></Route>
          <Route path="/Messages" element={<MessagesNav />}></Route>
          <Route path="/Integrations" element={<IntegrationsNav />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default AdminPage;
