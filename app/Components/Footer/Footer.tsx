import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">Customer Services</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <FooterList>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-base font-bold mb-2">About Us</h3>
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. Lorem Ipsum.
              </p>
              <p>
                &copy; {new Date().getFullYear()} E-Shop. All right reserved
              </p>
            </div>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-3">
              <Link href="#">
                <CiFacebook size={24} />
              </Link>
              <Link href="#">
                <CiInstagram size={24} />
              </Link>
              <Link href="#">
                <FaSquareXTwitter size={24} />
              </Link>
              <Link href="#">
                <FaYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
