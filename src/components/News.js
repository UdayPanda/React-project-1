import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Catherine Shu",
            "title": "Edupia raises Series A to close the education gap in Vietnam",
            "description": "There’s a large education gap in Vietnam between urban centers, which have access to more resources, and the smaller cities and rural areas where 80% of students live. Edupia, an online learning platform, is bridging that divide with its live classes and priv…",
            "url": "https://techcrunch.com/2022/09/07/edupia-raises-series-a-to-close-the-education-gap-in-vietnam/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1288215982.jpg?w=1200",
            "publishedAt": "2022-09-08T00:30:35Z",
            "content": "Theres a large education gap in Vietnam between urban centers, which have access to more resources, and the smaller cities and rural areas where 80% of students live. Edupia, an online learning platf… [+2978 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Bose reduces size and amps up noise canceling for the $299 QuietComfort Earbuds II",
            "description": "They’re not cheap; they’re $50 over the new AirPods Pro. But if you’re a Bose fan, you can pick them up starting September 15.",
            "url": "https://techcrunch.com/2022/09/07/bose-reduces-size-and-amps-up-noise-canceling-for-the-299-quietcomfort-earbuds-ii/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/bose-qc.jpg?w=1200",
            "publishedAt": "2022-09-08T00:00:40Z",
            "content": "Yes, I missed Boses big news this morning. I was busy withother stuff. You, too, would be forgiven for missing the QuietComfort Earbuds II launch, under the deluge of Apple news (including its own ne… [+1412 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "Lightspeed Venture Partners has hired podcasting guru Michael Mignano as a partner",
            "description": "Michael Mignano has joined the consumer practice of the sprawling venture firm Lightspeed Venture Partners, after previously co-founding the podcasting platform Anchor and then leading Spotify’s talk audio business after the streaming giant acquired Anchor in…",
            "url": "https://techcrunch.com/2022/09/07/lightspeed-venture-partners-has-hired-podcasting-guru-michael-mignano-as-a-partner/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-07-at-4.52.21-PM.png?w=1200",
            "publishedAt": "2022-09-07T23:55:13Z",
            "content": "Michael Mignano has joined the consumer practice of the sprawling venture firm Lightspeed Venture Partners, after previously co-founding the podcasting platform Anchor and then leading Spotify’s talk… [+2239 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Natasha Lomas",
            "title": "Adtech's compliance theatre is headed to Europe's top court",
            "description": "For those watching the slow motion unpicking of surveillance advertising in the European Union here’s a fresh development on the long and winding road to a long-overdue legal reckoning: Multiple grounds for appeal lodged by industry body, the IAB Europe, agai…",
            "url": "https://techcrunch.com/2022/09/07/iab-europe-tcf-gdpr-breach-appeal/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/dissidentspyware.jpg?w=1200",
            "publishedAt": "2022-09-07T23:22:17Z",
            "content": "For those watching the slow motion unpicking of surveillance advertising in the European Union here’s a fresh development on the long and winding road to a long-overdue legal reckoning: Multiple grou… [+10910 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Harri Weber",
            "title": "What, no Mini? Apple's big event leaves small-phone fans empty handed",
            "description": "I bear bad news if you’d rather not walk around feeling like you have a brick in your pocket: Apple seems to be bailing on its smallest smartphone all over again. That’s right. The $2.5 trillion company’s big fall event came and went today with no mention of …",
            "url": "https://techcrunch.com/2022/09/07/what-no-mini-apples-big-event-leaves-small-phone-fans-empty-handed/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/iPhone-12_iPhone-12-mini.jpg?w=1200",
            "publishedAt": "2022-09-07T22:46:42Z",
            "content": "I bear bad news if you’d rather not walk around feeling like you have a brick in your pocket: Apple seems to be bailing on its smallest smartphone all over again.\r\nThat’s right. The $2.5 trillion com… [+2189 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Greg Kumparak",
            "title": "Twenty-six years later, Quake gets ported to … Apple Watch?",
            "description": "Ever looked at your Apple Watch and thought “Dang, I just wish I could play the classic 1996 first-person shooter Quake on this thing!” … No? OK. But now you can! Developer Tomas “MyOwnClone” Vymazal was able to get Quake up and running on the watch; while Vy…",
            "url": "https://techcrunch.com/2022/09/07/twenty-six-years-later-quake-gets-ported-to-apple-watch/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/quake-apple-watch.png?w=1200",
            "publishedAt": "2022-09-07T22:19:40Z",
            "content": "Ever looked at your Apple Watch and thought “Dang, I just wish I could play the classic 1996 first-person shooter Quake on this thing!”\r\n No? OK. But now you can!\r\nDeveloper Tomas “MyOwnClone” Vymaza… [+862 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Matt Burns",
            "title": "NXgenPort wins the TechCrunch Live Minneapolis Pitch Off",
            "description": "Today TechCrunch hosted a special TechCrunch Live event focused on the great city of Minneapolis. Three local companies competed in a pitch-off, and I’m pleased to report the winner. NXgenPort won the pitch competition, and will be fast tracked into the Battl…",
            "url": "https://techcrunch.com/2022/09/07/nxgenport-wins-the-techcrunch-live-minneapolis-pitch-off/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/3.Startup-What-Will-NXgenPort-Do-Graphic.jpg?w=1200",
            "publishedAt": "2022-09-07T22:15:29Z",
            "content": "Today TechCrunch hosted a special TechCrunch Live event focused on the great city of Minneapolis. Three local companies competed in a pitch-off, and I’m pleased to report the winner.\r\nNXgenPort won t… [+1224 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Apple leans into the void with the iPhone 14 Pro",
            "description": "\"If you stare into the abyss, the abyss stares back at you.” Not only that, but if you stare into this one, it will even snap a selfie.",
            "url": "https://techcrunch.com/2022/09/07/apple-leans-into-the-void-with-the-iphone-14-pro/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/CMC_3496.jpg?w=1200",
            "publishedAt": "2022-09-07T21:42:05Z",
            "content": "Do you have a second to talk about negative space? It will be quick, I promise. Its effectively that blank area between objects in a work of art. As the name implies, its defined by an absence, but i… [+2942 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Christine Hall",
            "title": "Daily Crunch: Apple launches new iPhone 14, a rugged Apple Watch, and more",
            "description": "Hello, friends, and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
            "url": "https://techcrunch.com/2022/09/07/daily-crunch-apple-launches-new-iphone-14-a-rugged-apple-watch-and-more/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_2x.jpg?w=1200",
            "publishedAt": "2022-09-07T20:48:32Z",
            "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT,subscribe here.\r\nIts Wednesday, which today is known as Apple iPhone 14 (heres all o… [+2693 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maggie Stamets",
            "title": "7 conversations with YC founders about their entrepreneurial journeys",
            "description": "It’s YC Demo Day week, which has us nostalgic for the conversations Found hosts have had with founders who have been through the famed accelerator program. In every episode of Found, hosts Darrell Etherington and Jordan Crook dig into a founder’s background, …",
            "url": "https://techcrunch.com/2022/09/07/yc-demo-day-found-podcast/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=1200",
            "publishedAt": "2022-09-07T16:53:32Z",
            "content": "Its YC Demo Day week, which has us nostalgic for the conversations Found hosts have had with founders who have been through the famed accelerator program. In every episode of Found, hosts Darrell Eth… [+4694 chars]"
        }
    ]

    constructor() {
        super();
        console.log("This is console from news.js!")
        this.state = {
            articles: this.article,
            loading: false
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Short News are here </h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        <div className="col-md-4">
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News