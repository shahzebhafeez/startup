import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <h3>Titan.</h3>
        <div className="headings">
            <div className="cashmanagement">
                <div className="Cashmanage">Cash Management</div>
                
                <div className="SmartCash">Smart Cash</div>
                <div className="SmartCashFAQs">Smart Cash FAQs</div>
                <div className="CashOptions">Cash Options</div>
                <div className="GetSmartCash">Get Smart Cash</div>
            </div>

            <div className="section2">
                <div className="subheading">Invest</div>
                <div className="ManagedInvesting">
                Managed Investing
                </div>
                <div className="mannagedStocks">Managed Stocks</div>
                <div className="AutomatedStocks">Automated Stocks</div>
                <div className="AutomatedBonds">Automated Bonds</div>
                <div className="crypto">Crypto</div>
                <div className="credit">Credit</div>
                <div className="VentureCapital">Venture Capital</div>
                <div className="RealEstate">Real Estate</div>
                <div className="longterm">Long-Term Investing</div>
                <div className="retirement">Retirement</div>
                <div className="All">All Strategies</div>  
            </div>
            <div className="section3">
            <div className="learn">Learn</div>
            <div className="research">Research & Trade Updates</div>
            <div className="Articles">Articles</div>
            <div className="news">Newsletters</div>
            <div className="wealt">Wealth Calculator</div>
            <div className="sCS">Smart Cash Calculator</div>
            <div className="help">Help Center</div> 
            </div>
            <div className="section4">
            <div className="comp">Company</div>
            <div className="price">Pricing</div>
            <div className="us">About Us</div>
            <div className="careers">Careers</div>
            <div className="legal">Legal</div>
            <div className="privacy">Privacy</div>
            <div className="terms">Terms</div>   
            </div>
        </div>
    </footer>
  );
}

export default Footer;
