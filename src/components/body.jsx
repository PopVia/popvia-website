import React from 'react';

const Body = () => {

    const cardData = [
        {
            title: "LinkedIn News Scraper",
            subtitle: "Scrape, save, and view historical LinkedIn News top stories from your LinkedIn feed.",
            url: ''
        },
        {
            title: "Simple To-Do List",
            subtitle: "Add, edit, archive and export to-do list items to CSV.",
            url: ''
        },
        {
            title: "Code Snippet Saver",
            subtitle: "Edit, copy, or delete your snippets anytime. Keep your code organized and accessible.",
            url: ''
        },
    ];

    return (
        <section className='body'>

            <div className='body__wrapper'>
                <h1>Explore all that our extensions have to offer</h1>
                <div className='card-wrapper'>
                    {cardData && cardData.map((card, i) => (
                        <a className='card' href={card.url} key={i}>
                            <div className='top'>
                                <h3>{card.title}</h3>
                            </div>
                            <div className='bottom'>
                                <p>{card.subtitle}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Body;
