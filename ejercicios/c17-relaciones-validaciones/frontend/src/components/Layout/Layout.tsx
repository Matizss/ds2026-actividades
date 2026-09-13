import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
// import '../../styles/Layout.css';

interface LayoutProps { children: ReactNode };

function Layout({ children }: LayoutProps) {
    return (
    <div className="d-flex flex-column  min-vh-100">
        <Header />
        <Container fluid className="p-0">{children}</Container>
        <Footer />
    </div>
    );
    }
export default Layout;