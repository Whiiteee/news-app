import React, { Component } from 'react'
import Newsitem from './Newsitem'



export class News extends Component {

    // articles= [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Deccan Herald"
    //         },
    //         "author": "DH Web Desk",
    //         "title": "Scientists discover cave on moon that could be used as shelter for astronauts - Deccan Herald",
    //         "description": null,
    //         "url": "https://www.deccanherald.com/science/space/scientists-discover-cave-on-moon-that-could-be-used-as-shelter-for-astronauts-3107549",
    //         "urlToImage": "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F10%2F23%2F2020-10-19t101802z53183680rc2mlj9od3hdrtrmadp3nokia-nasa-moonjpg-1043314-1634940329.jpg?rect=0%2C30%2C1280%2C672&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
    //         "publishedAt": "2024-07-16T10:24:11Z",
    //         "content": "\"Lunar caves have remained a mystery for over 50 years. So, it was exciting to be able to finally prove the existence of one,\" the publication quoted Leonardo Carrer and Lorenzo Bruzzone of the Unive… [+696 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Zee Business"
    //         },
    //         "author": "PTI",
    //         "title": "Chandipura virus: 6 children die in Gujarat since July 10, says health minister Rushikesh Patel - Zee Business",
    //         "description": "Chandipura virus causes fever, with symptoms similar to flu, and acute encephalitis (inflammation of the brain). It is transmitted by vectors like mosquitoes, ticks and sand flies.",
    //         "url": "https://www.zeebiz.com/trending/news-chandipura-virus-infection-gujarat-symptoms-lakshan-vaccine-treatment-fever-flu-6-children-die-total-number-of-cases-rise-to-12-health-minister-rushikesh-patel-301755",
    //         "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2024/07/16/305115-viruses-672068960720.jpg",
    //         "publishedAt": "2024-07-16T10:07:55Z",
    //         "content": "Six children have died due to suspected Chandipura virus in Gujarat since July 10, with the total number of cases of the infection rising to 12, state Health Minister Rushikesh Patel has said.\r\nSampl… [+1620 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "TOI Lifestyle Desk",
    //         "title": "American cancer society identifies 6 factors that are linked to almost half of all cancer cases - The Times of India",
    //         "description": "The study indicates 50% of cancer cases can be prevented through lifestyle changes. Key factors include smoking cessation, balanced nutrition, regular",
    //         "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/american-cancer-society-identifies-6-factors-that-are-linked-to-almost-half-of-all-cancer-cases/articleshow/111780487.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-111780648,width-1070,height-580,imgsize-775990,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2024-07-16T09:50:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "\"Someone Must Have Doubted...\": Senior Doctor On Trainee IAS Officer's Disability Claim - NDTV",
    //         "description": "Trainee IAS officer Puja Khedkar - under scrutiny over claims she lied about disabilities to clear the Civil Services exam - was sent by the UPSC, for a medical check-up because \"someone must have doubted her claims\", ex-AIIMS Director Dr MC Mishra.",
    //         "url": "https://www.ndtv.com/india-news/trainee-ias-officer-puja-khedkar-news-puja-khedkar-fake-disability-certificate-aiims-puja-khedkar-medical-examination-6117453",
    //         "urlToImage": "https://c.ndtvimg.com/2024-07/qee7i53o_puja-khedkar_625x300_11_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
    //         "publishedAt": "2024-07-16T09:31:21Z",
    //         "content": "Puja Khedkar is a 2023-batch IAS officer (File).\r\nPune: Trainee IAS officer Puja Khedkar - under scrutiny over claims she lied about mental and visual disabilities to clear the Civil Services exam - … [+3865 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livelaw.in"
    //         },
    //         "author": "Anmol Kaur Bawa",
    //         "title": "Judge Heading Commission of Inquiry Against Ex-CM KCR Resigns Following Supreme Court's Rebuke - Live Law - Indian Legal News",
    //         "description": "In a significant development, Justice(Retired) L Narasimha Reddy told the Supreme Court that he was resigning as the head of the Commission of Inquiry constituted by the Telangana Government to...",
    //         "url": "https://www.livelaw.in/top-stories/judge-heading-commission-of-inquiry-against-ex-cm-kcr-resigns-following-supreme-courts-rebuke-263515",
    //         "urlToImage": "https://www.livelaw.in/h-upload/2023/02/17/459450-kcr-telangana-map-sc.webp",
    //         "publishedAt": "2024-07-16T08:56:09Z",
    //         "content": "In a significant development, Justice(Retired) L Narasimha Reddy told the Supreme Court that he was resigning as the head of the Commission of Inquiry constituted by the Telangana Government to probe… [+3375 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Jammu-Kashmir: Four Indian soldiers killed in gunfight - BBC.com",
    //         "description": "The relatively peaceful Jammu region has witnessed increasing violence in recent months.",
    //         "url": "https://www.bbc.com/news/articles/c1we3n8g65do",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9741/live/0a5f2a90-4348-11ef-8895-6d3cb2081c6f.jpg",
    //         "publishedAt": "2024-07-16T08:46:55Z",
    //         "content": "At least four soldiers have been killed in a gunfight with suspected militants in Indian-administered Kashmir - the latest in a recent spate of attacks by armed insurgents in the disputed region.\r\nSe… [+1452 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "PINKVILLA"
    //         },
    //         "author": "Jatinder Singh",
    //         "title": "Top highest grossing films at the Indian box office: Prabhas starrer Kalki 2898 AD fifth overtaking Animal - PINKVILLA",
    //         "description": "The Good Hold In The Third Week Gives The Prabhas Starrer Kalki 2898 AD A Realistic Shot At Reaching The Rs. 700 Crore Mark At Indian Box Office.",
    //         "url": "https://www.pinkvilla.com/entertainment/box-office/top-highest-grossing-films-at-the-indian-box-office-prabhas-starrer-kalki-2898-ad-fifth-overtaking-animal-1328596",
    //         "urlToImage": "https://www.pinkvilla.com/images/2024-07/805199884_kalki-5.jpg",
    //         "publishedAt": "2024-07-16T08:46:34Z",
    //         "content": "Kalki 2898 AD grossed Rs. 5 crore on its third Monday, which brings its total gross at the Indian box office to Rs. 667 crore. This makes it the fifth highest-grossing film ever in India, replacing A… [+2501 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hindu",
    //             "name": "The Hindu"
    //         },
    //         "author": "The Hindu",
    //         "title": "Anant-Radhika wedding: Gujarat engineer arrested for bomb threat - The Hindu",
    //         "description": null,
    //         "url": "https://www.thehindu.com/news/national/anant-radhika-wedding-gujarat-engineer-arrested-for-bomb-threat/article68409522.ece",
    //         "urlToImage": null,
    //         "publishedAt": "2024-07-16T08:41:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "google-news",
    //             "name": "Google News"
    //         },
    //         "author": "The Economic Times",
    //         "title": "Bajaj Auto Q1 Results: Cons PAT jumps 18% YoY to Rs 1,942 crore, revenue rises 16% - The Economic Times",
    //         "description": null,
    //         "url": "https://news.google.com/rss/articles/CBMilgFodHRwczovL20uZWNvbm9taWN0aW1lcy5jb20vbWFya2V0cy9zdG9ja3MvZWFybmluZ3MvYmFqYWotYXV0by1xMS1yZXN1bHRzLXBhdC1qdW1wcy0xOC15b3ktdG8tcnMtMTk0Mi1jcm9yZS1yZXZlbnVlLXJpc2VzLTE2L2FydGljbGVzaG93LzExMTc3NzU3OS5jbXPSAZoBaHR0cHM6Ly9tLmVjb25vbWljdGltZXMuY29tL21hcmtldHMvc3RvY2tzL2Vhcm5pbmdzL2JhamFqLWF1dG8tcTEtcmVzdWx0cy1wYXQtanVtcHMtMTgteW95LXRvLXJzLTE5NDItY3JvcmUtcmV2ZW51ZS1yaXNlcy0xNi9hbXBfYXJ0aWNsZXNob3cvMTExNzc3NTc5LmNtcw?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2024-07-16T08:17:29Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WION"
    //         },
    //         "author": null,
    //         "title": "Sunspot AR3738 releases X-class solar flare triggering radio blackouts in Australia and Japan - WION",
    //         "description": "Sun released another set of solar flares on Saturday and the explosion was captured by NASA's Solar Dynamics Observatory from space. The X-class flare, the most powerful class of solar flare, was released from Sunspot AR3738. The solar flares resulted in shor…",
    //         "url": "https://www.wionews.com/science/sunspot-ar3738-releases-x-class-solar-flare-triggering-radio-blackouts-in-australia-and-japan-741344",
    //         "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/07/16/443839-untitled-design-2024-07-16t134905784.png",
    //         "publishedAt": "2024-07-16T08:11:36Z",
    //         "content": "Sun released another set of solar flares on Saturday and the explosion was captured by NASA's Solar Dynamics Observatory from space. The X-class flare, the most powerful class of solar flare, was rel… [+1988 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "India Today"
    //         },
    //         "author": "Press Trust of India",
    //         "title": "IND v SL: Hardik Pandya set to captain in T20Is, to miss ODIs due to personal reason - India Today",
    //         "description": "India tour of Sri Lanka 2024 Hardik Pandya is all set to be named captain for the T20I series in Sri Lanka He has sought permission to be rested from the ODI series due to personal reason",
    //         "url": "https://www.indiatoday.in/sports/cricket/story/india-tour-of-sri-lanka-squad-selection-hardik-pandya-t20i-captain-odis-rest-2567486-2024-07-16",
    //         "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/hardik-pandya-030641506-16x9_5.jpg?VersionId=Vb2jBaX2eOl2QuIi65rtds8Cj1cpBhK.",
    //         "publishedAt": "2024-07-16T08:10:57Z",
    //         "content": "Star all-rounder Hardik Pandya is all set to lead India in the three-match T20 International series against Sri Lanka starting July 27. However, one of the heroes of India's T20 World Cup victory las… [+1363 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Bar & Bench - Indian Legal News"
    //         },
    //         "author": "Bar & Bench",
    //         "title": "Centre clears appointment of Justices N Kotiswar Singh, R Mahadevan as Supreme Court judges - Bar & Bench - Indian Legal News",
    //         "description": "The Central government has notified the appointments of Jammu &amp; Kashmir High Court Chief Justice N Kotiswar Singh and Madras High Court Acting Chief Justice",
    //         "url": "https://www.barandbench.com/news/centre-appoints-justices-n-kotiswar-singh-r-mahadevan-supreme-court-judges",
    //         "urlToImage": "https://media.assettype.com/barandbench%2F2024-07%2F7a2deea0-8de7-409e-9600-a4b7d7e4938f%2FJustice%20N%20Kotiswar%20Singh%20and%20Justice%20R%20Mahadevan?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    //         "publishedAt": "2024-07-16T07:44:05Z",
    //         "content": "Justice Singh has been serving as Chief Justice of Jammu and Kashmir and Ladakh High Court since February 2023.\r\nHe originally hails from Manipur and would be the first Supreme Court judge from that … [+760 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hindustan Times"
    //         },
    //         "author": "Santanu Das",
    //         "title": "Vicky Kaushal shares unseen, adorable pics with Katrina Kaif on her birthday: From pizza fights to pujas together - Hindustan Times",
    //         "description": "Vicky Kaushal shared a bunch of unseen pictures with Katrina Kaif on Instagram to wish her on her birthday. Check out how fans reacted. | Bollywood",
    //         "url": "https://www.hindustantimes.com/entertainment/bollywood/vicky-kaushal-shares-unseen-adorable-pics-with-katrina-kaif-on-her-birthday-from-pizza-fights-to-pujas-together-101721113438687.html",
    //         "urlToImage": "https://images.hindustantimes.com/img/2024/07/16/1600x900/vicky_kaushal_katrina_kaif_1721121435193_1721121446711.png",
    //         "publishedAt": "2024-07-16T07:36:54Z",
    //         "content": "As Katrina Kaif clocks her 41st birthday, actor-husband Vicky Kaushal wished her with an adorable post on his Instagram. Vicky, who is currently promoting Bad Newz, shared a bunch of candid pictures … [+2181 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "Ulajh Trailer: Janhvi Kapoor Navigates Through A Web Of Lies, Deceit And Betrayal - NDTV Movies",
    //         "description": "Ulajh is slated to release on August 2",
    //         "url": "https://www.ndtv.com/entertainment/ulajh-trailer-the-story-of-scapegoat-suhana-bhatia-who-plans-to-eat-the-lion-6116432",
    //         "urlToImage": "https://c.ndtvimg.com/2024-07/e5pr7lpo_-janhvi-kapoor_625x300_16_July_24.jpeg",
    //         "publishedAt": "2024-07-16T07:35:02Z",
    //         "content": "Janhvi Kapoor in a still from Ulajh trailer. (courtesy: YouTube)\r\nNew Delhi: The trailer for Janhvi Kapoor's Ulajh is here. In the film, Janhvi plays the role of Suhana Bhatia, who is appointed as In… [+1717 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Indian Express"
    //         },
    //         "author": "The Indian Express",
    //         "title": "Two Indian space scientists honoured at international space scientists meet - The Indian Express",
    //         "description": null,
    //         "url": "https://indianexpress.com/article/technology/science/indian-space-scientists-international-meet-award-prahlad-agarwal-anil-bhardwaj-9456148/",
    //         "urlToImage": null,
    //         "publishedAt": "2024-07-16T06:51:27Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Indian Express"
    //         },
    //         "author": "The Indian Express",
    //         "title": "‘Goodbye to political stability’: Leaders across party lines condemn Pakistan govt’s decision to ban Imran Khan’s PTI - The Indian Express",
    //         "description": null,
    //         "url": "https://indianexpress.com/article/pakistan/pakistan-ban-imran-khan-pti-reactions-ppp-pmln-9456094/",
    //         "urlToImage": null,
    //         "publishedAt": "2024-07-16T06:45:12Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WION"
    //         },
    //         "author": null,
    //         "title": "Virat Kohli not the same after fame and power, Rohit Sharma unchanged: Former Indian spinner`s BIG claim - WION",
    //         "description": "Former Indian spinner Amit Mishra made a sensational claim, in a recent interaction, while comparing Virat Kohli and Rohit Sharma. The wily spinner claimed that Kohli changed a lot after gaining fame and power in his career whereas Rohit, under whom India won…",
    //         "url": "https://www.wionews.com/cricket/virat-kohli-not-the-same-after-fame-and-power-rohit-sharma-unchanged-former-indian-spinners-big-claim-741292",
    //         "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/07/16/443808-mixcollage-01-jul-2024-02-28-pm-8728.jpg",
    //         "publishedAt": "2024-07-16T06:12:14Z",
    //         "content": "Former Indian spinner Amit Mishra made a sensational claim, in a recent interaction, while comparing Virat Kohli and Rohit Sharma. The wily spinner claimed that Kohli changed a lot after gaining fame… [+2062 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livelaw.in"
    //         },
    //         "author": "Debby Jain",
    //         "title": "Supreme Court Issues Notice To CBI/ED On Manish Sisodia's Bail Applications In Liquor Policy Case - Live Law - Indian Legal News",
    //         "description": "The Supreme Court today issued notice on former Delhi Deputy Chief Minister Manish Sisodia's bail applications in the money laundering and corruption cases registered over the alleged liquor policy...",
    //         "url": "https://www.livelaw.in/top-stories/supreme-court-manish-sisodia-bail-plea-liquor-policy-case-notice-issued-263487",
    //         "urlToImage": "https://www.livelaw.in/h-upload/2024/06/05/543199-manish-sisodia-sc.webp",
    //         "publishedAt": "2024-07-16T06:03:13Z",
    //         "content": "The Supreme Court today issued notice on former Delhi Deputy Chief Minister Manish Sisodia's bail applications in the money laundering and corruption cases registered over the alleged liquor policy s… [+3687 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livemint"
    //         },
    //         "author": "Livemint",
    //         "title": "Upcoming phone launches July 2024: Oneplus Nord 4, Realme 13 Pro series, Samsung M35 and more | Mint - Mint",
    //         "description": "From OnePlus Nord 4 to Realme 13 Pro series, checkout the list of all the smartphones that confirmed to launch in the month of July.",
    //         "url": "https://www.livemint.com/technology/gadgets/upcoming-phone-launches-july-2024-oneplus-nord-4-realme-13-pro-series-samsung-m35-and-more-11721102218873.html",
    //         "urlToImage": "https://www.livemint.com/lm-img/img/2024/07/16/1600x900/nord_4_1720747893916_1721106238917.jpg",
    //         "publishedAt": "2024-07-16T05:08:36Z",
    //         "content": "From the OnePlus Nord 4 to the Honor 200 series, a number of new smartphones are about to hit the Indian market. To cut through the confusion, we have compiled a list of smartphones that are confirme… [+5359 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBCTV18"
    //         },
    //         "author": "Pihu Yadav",
    //         "title": "iQOO Z9 Lite 5G launches in India at ₹10,499: Check offers, specifications and more - CNBCTV18",
    //         "description": "Running on FunTouch OS 14 based on Android 14, the device is equipped with a 5000mAh battery, promising long-lasting performance and rapid 15W charging.",
    //         "url": "https://www.cnbctv18.com/technology/iqoo-z9-lite-5g-launches-in-india-at-%e2%82%b910499-check-offers-specifications-and-more-19443700.htm",
    //         "urlToImage": "https://images.cnbctv18.com/uploads/2024/07/iqoo-z9-lite-5g-2024-07-d0f80d4dfca8f78c12cd0de16fadcee5.jpg?im=FitAndFill,width=500,height=300",
    //         "publishedAt": "2024-07-16T04:53:01Z",
    //         "content": "Smartphone maker iQOO, on Monday, unveiled the latest addition to its Fully Loaded Z series the iQOO Z9 Lite 5G which is said to be aimed at first-time 5G users.Powered by the MediaTek Dimensity 6300… [+1535 chars]"
    //     }
    // ]
    articles = []
    
    constructor(){
        super();
        this.state = {
            articles: this.articles
        };
    }
    
    async componentDidMount(){
        let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e1422705fb6244bda820665e83e3a920')
        let parsedData =await data.json();
          
        this.setState({articles: parsedData.articles})
        console.log(this.state)
    }


     render() {
        
    return (
      <div className='news-body'>

        {
            this.state.articles.map((ele)=>{
                return(
                    <Newsitem key={ele.url} url={!ele.url?'url':ele.url} title={ele.title?ele.title:'No title'} imgUrl={ele.urlToImage?ele.urlToImage:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=='} description={ele.description?ele.description.slice(0,150)+'...':'No description'} />
                )
            })
        }


      </div>
    )
  }
}

export default News
