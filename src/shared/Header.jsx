function Header({ email, token }) {
  return (
    <header>
      <h1>My Tasks</h1>
      {token && email && <p>Signed in as {email}</p>}
    </header>
  );
}

export default Header;
