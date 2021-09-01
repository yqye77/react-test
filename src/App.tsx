import React from "react";

function App() {
  return (
    <div className="container">
      <section className="sidebar">侧边导航栏</section>
      <section className="main">
        <header className="header">
          <span className="username">Hi, 安歌</span>
        </header>
        <div className="wrapper">主体内容</div>
        <footer className="footer">
          <span className="copyright">Copyright@2019 安歌</span>
        </footer>
      </section>
    </div>
  );
}

export default App;
