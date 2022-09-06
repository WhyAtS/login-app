import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="form-structor">
	<div class="login">
		<h2 class="form-title" id="login">Project Login</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Username" />
			<input type="password" class="input" placeholder="Password" />
		</div>
		<button class="login-btn">Login</button>
	</div>
	<div class="login slide-up">
		<div class="center">
			<button class="forgot-btn">Forgot Password</button>
		</div>
	</div>
</div>
      </header>
    </div>
  );
}

export default App;
