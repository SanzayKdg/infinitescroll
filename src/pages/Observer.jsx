import "./Observer.css";
const Observer = () => {
  // const cards = [
  //   "This is the first card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is a card",
  //   "This is the last card",
  // ];
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        // if (entry.isIntersecting) observer.unobserve(entry.target);
      });
      console.log(entries);
    },
    {
      threshold: 1,
      // offset when something happens
      rootMargin: "100px",
    }
  );

  const lastCardObserver = new IntersectionObserver((entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCard();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  }, {});

  lastCardObserver.observe(document.querySelector(".card:last-child"));

  cards.forEach((card) => {
    observer.observe(card);
  });

  const cardContainer = document.querySelector(".card-container");
  function loadNewCard() {
    for (let i = 0; i < 10; i++) {
      const card = document.createElement("div");
      card.textContent = "This is a new card";
      card.classList.add("card");
      observer.observe(card);
      cardContainer.append(card);
    }
  }

  return (
    <div className="card-container flex flex-col items">
      {/* {cards &&
        cards.map((items, index) => (
          <div key={index + items} className="card">
            {items}
          </div>
        ))} */}

      <div className="card">This is the first card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is a card</div>
      <div className="card">This is the last card</div>
    </div>
  );
};

export default Observer;
