const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const footerContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const footerTextStyle = {
  fontSize: '14px',
  marginBottom: '5px',
};

const footerLinkStyle = {
  color: '#ccc',
  textDecoration: 'none',
};

const footerLinkHoverStyle = {
  color: '#fff',
};

function Footer() {
  return (
    <div style={footerStyle}>
      <footer className='container'>
        <div>
          <p style={footerTextStyle}>&copy; {new Date().getFullYear()} عبدالرحمن محمد. جميع الحقوق محفوظة.</p>
          <p style={footerTextStyle}>اتصل بي على </p>
          <div className='d-flex w-100 justify-content-center flex-wrap'>
            <div style={{ margin: '0 30px', textAlign: 'center', fontSize: '15px' }}>
              <a
                href={`mailto:Abdelrhmanelsyed7@gmail.com`}
                style={footerLinkStyle}
                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}>
                abdelrhmanelsyed7@gmail.com
              </a>
            </div>
            <div style={{ margin: '0 30px', textAlign: 'center', fontSize: '15px' }}>
              <a
                href={`https://wa.me/+966580370681`}
                style={footerLinkStyle}
                onMouseOver={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = footerLinkStyle.color)}>
                ‪+966 58 037 0681‬
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
