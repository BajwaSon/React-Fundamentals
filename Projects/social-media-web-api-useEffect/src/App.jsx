import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container d-flex">
        <SideBar
          activeTab={selectedTab}
          onSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="app-content d-flex flex-column flex-fill overflow-hidden">
          <Header></Header>
          <div className="inner-content-container container-fluid flex-fill overflow-y-auto py-4">
            {selectedTab === "Home" ? (
              <PostList onSelectedTab={setSelectedTab}></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
