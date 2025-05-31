import Image from 'next/image';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

const FooterLink = ({ href = "#", label }: { href?: string, label: string }) => (
    <a href={href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
        {label}
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white pt-12 pb-8 print:hidden"> {/* Added print:hidden */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Footer: Logo & Description */}
                    <div className="md:col-span-2">
                        {/* Ensure you have this logo image or update the path */}
                        <Image
                            src="/logo-footer.png" // UPDATE PATH if different from header logo or if it needs to be visible on blue
                            alt="Edunique Logo"
                            width={180}
                            height={50}
                            className="mb-4"
                        />
                        <p className="text-sm text-blue-100 leading-relaxed max-w-md">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text a type specimen book.
                        </p>
                    </div>

                    {/* Footer: Company Links */}
                    <div>
                        <h5 className="text-md font-semibold mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li><FooterLink label="About us" /></li>
                            <li><FooterLink label="Blogs" /></li>
                            <li><FooterLink label="Instructor List" /></li>
                        </ul>
                    </div>

                    {/* Footer: Support Links & Contact */}
                    <div>
                        <h5 className="text-md font-semibold mb-4">Support</h5>
                        <ul className="space-y-2 mb-4">
                            <li><FooterLink label="FAQ" /></li>
                            <li><FooterLink label="Privacy" /></li>
                            <li><FooterLink label="Terms and Condition" /></li>
                        </ul>
                        <h5 className="text-md font-semibold mb-2 mt-6">Contact info</h5>
                        <ul className="space-y-1 text-sm text-blue-100">
                            <li>+91 0000000000</li>
                            <li>example@gm.com</li>
                            <li>Sector 4, New Delhi</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-500/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-blue-200">© Edunique All Rights Reserved 2025</p>
                    <div className="flex space-x-3 mt-4 sm:mt-0">
                        {[
                            { icon: FiInstagram, href: '#instagram' },
                            { icon: FiTwitter, href: '#twitter' },
                            { icon: FiLinkedin, href: '#linkedin' },
                            { icon: FiFacebook, href: '#facebook' },
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-200 hover:text-white p-1.5 bg-white/10 rounded-full transition-colors"
                                    aria-label={`Follow us on ${social.href.substring(1)}`}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}