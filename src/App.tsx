import React from "react";

function App() {
  return (
    <div className="container bg-white  dark:bg-gray-800">
      <section className="sidebar">侧边导航栏</section>
      <section className="main">
        <header className="header">
          <span className="username text-blue-50">Hi, 安歌</span>
        </header>
        <div className="wrapper flex justify-center items-center">主体内容</div>
        <footer className="footer">
          <span className="copyright">Copyright@2019 安歌</span>
        </footer>
      </section>
    </div>
  );
}

export default App;
