const FixedTopLogo = () => {
  return (
    <div 
      className="fixed left-1/2 transform -translate-x-1/2 z-[900]"
      style={{ top: 'calc(var(--header-height) + 16px)' }}
    >
      <h1 className="logo-text">justzoom</h1>
    </div>
  );
};

export default FixedTopLogo;