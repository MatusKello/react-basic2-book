// JSX - javascript XML
// komponent je funkcia
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokaze vratit len jeden TAG

import Book from './components/Book';

const App = () => {
  const books = [
    {
      id: 1,
      image:
        'https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp',
      title: 'Harry Potter a Kámen mudrců',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum quod corrupti, provident assumenda ex minima ad nostrum omnis mollitia pariatur! Aliquid obcaecati iusto praesentium veritatis aut eveniet quo nam.',
    },
    {
      id: 2,
      image:
        'https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp',
      title: 'Harry Potter a Tajemná komnata',
      about:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      id: 3,
      image:
        'https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp',
      title: 'Harry Potter a Vězeň z Azkabanu',
      about:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    },
  ];

  return (
    <div className='all-books'>
      <Book {...books[0]} />
      <Book {...books[1]} />
      <Book {...books[2]} />
    </div>
  );
};

export default App;

//! skrateny zapis       <Book {...books[0]} />
/* myImage={books[0].image}
myTitle={books[0].title}
about={books[0].about} 

myImage={books[1].image}
myTitle={books[1].title}
about={books[1].about}

myImage={books[2].image}
myTitle={books[2].title}
about={books[2].about}*/
