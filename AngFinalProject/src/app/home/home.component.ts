  import { Component } from '@angular/core';
  import { CartItem } from '../models/cart-item.model'; // Import the CartItem model

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  
  export class HomeComponent {
    cartItems: CartItem[] = [];
  searchtext: any = '';
  p: any = 1;
  count: any = 10;
  totalPrice: number = 0; // Declare totalPrice
    
    addToCart(item: any) {
      const cartItem = new CartItem();
      cartItem.id = item.id;
      cartItem.title = item.title;
      cartItem.price = item.pages; // Adjust this based on your data
      cartItem.quantity = 1; // Initial quantity is 1
    
      this.cartItems.push(cartItem);
    }
    updateQuantity(index: number): void {
      if (this.cartItems[index].quantity < 1) {
        this.cartItems.splice(index, 1); // Remove item if quantity is 0 or less
      }
      this.calculateTotalPrice();
    }
    
    removeFromCart(index: number): void {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice();
    }
    
    calculateTotalPrice(): void {
      this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    


  books= [
    {
      "id" : "1",
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "assets/images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "id" : "2",
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "assets/images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "id" : "3",
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "assets/images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "id" : "4",
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "assets/images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "id" : "5",
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "assets/images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "id" : "6",
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "assets/images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "id" : "7",
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "assets/images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "id" : "8",
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "assets/images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "id" : "9",
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "assets/images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "id" : "10",
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "assets/images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "id" : "11",
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "assets/images/the-decameron.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "id" : "12",
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "assets/images/ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones\n",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "id" : "13",
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "assets/images/wuthering-heights.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "id" : "15",
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      "imageLink": "assets/images/l-etranger.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942
    },
    {
      "id" : "16",
      "author": "Paul Celan",
      "country": "Romania, France",
      "imageLink": "assets/images/poems-paul-celan.jpg",
      "language": "German",
      "link": "\n",
      "pages": 320,
      "title": "Poems",
      "year": 1952
    },
    {
      "id" : "17",
      "author": "Louis-Ferdinand C\u00e9line",
      "country": "France",
      "imageLink": "assets/images/voyage-au-bout-de-la-nuit.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "id" : "18",
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "imageLink": "assets/images/don-quijote-de-la-mancha.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "id" : "19",
      "author": "Geoffrey Chaucer",
      "country": "England",
      "imageLink": "assets/images/the-canterbury-tales.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "id" : "20",
      "author": "Anton Chekhov",
      "country": "Russia",
      "imageLink": "assets/images/stories-of-anton-chekhov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    },
    {
      "id" : "21",
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      "imageLink": "assets/images/nostromo.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo\n",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904
    },
    {
      "id" : "22",
      "author": "Charles Dickens",
      "country": "United Kingdom",
      "imageLink": "assets/images/great-expectations.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861
    },
    {
      "id" : "23",
      "author": "Denis Diderot",
      "country": "France",
      "imageLink": "assets/images/jacques-the-fatalist.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796
    },
    {
      "id" : "24",
      "author": "Alfred D\u00f6blin",
      "country": "Germany",
      "imageLink": "assets/images/berlin-alexanderplatz.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929
    },
    {
      "id" : "25",
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "assets/images/crime-and-punishment.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866
    },
    {
      "id" : "26",
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "assets/images/the-idiot.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869
    },
    {
      "id" : "27",
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "assets/images/the-possessed.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
      "pages": 768,
      "title": "The Possessed",
      "year": 1872
    },
    {
      "id" : "28",
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "assets/images/the-brothers-karamazov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880
    },
    {
      "id" : "29",
      "author": "George Eliot",
      "country": "United Kingdom",
      "imageLink": "assets/images/middlemarch.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871
    },
    {
      "id" : "30",
      "author": "Ralph Ellison",
      "country": "United States",
      "imageLink": "assets/images/invisible-man.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952
    },
    {
      "id" : "31",
      "author": "Euripides",
      "country": "Greece",
      "imageLink": "assets/images/medea.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
      "pages": 104,
      "title": "Medea",
      "year": -431
    },
    {
      "id" : "32",
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "assets/images/absalom-absalom.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "year": 1936
    },
    {
      "id" : "33",
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "assets/images/the-sound-and-the-fury.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
      "pages": 326,
      "title": "The Sound and the Fury",
      "year": 1929
    },
    {
      "id" : "34",
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "assets/images/madame-bovary.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
      "pages": 528,
      "title": "Madame Bovary",
      "year": 1857
    },
    {
      "id" : "35",
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "assets/images/l-education-sentimentale.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
      "pages": 606,
      "title": "Sentimental Education",
      "year": 1869
    },
    {
      "id" : "36",
      "author": "Federico Garc\u00eda Lorca",
      "country": "Spain",
      "imageLink": "assets/images/gypsy-ballads.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
      "pages": 218,
      "title": "Gypsy Ballads",
      "year": 1928
    },
    {
      "id" : "37",
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "assets/images/one-hundred-years-of-solitude.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "year": 1967
    },
    {
      "id" : "38",
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "assets/images/love-in-the-time-of-cholera.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "year": 1985
    },
    {
      "id" : "39",
      "author": "Johann Wolfgang von Goethe",
      "country": "Saxe-Weimar",
      "imageLink": "assets/images/faust.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
      "pages": 158,
      "title": "Faust",
      "year": 1832
    },
    {
      "id" : "40",
      "author": "Nikolai Gogol",
      "country": "Russia",
      "imageLink": "assets/images/dead-souls.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls\n",
      "pages": 432,
      "title": "Dead Souls",
      "year": 1842
    },
    {
      "id" : "41",
      "author": "G\u00fcnter Grass",
      "country": "Germany",
      "imageLink": "assets/images/the-tin-drum.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
      "pages": 600,
      "title": "The Tin Drum",
      "year": 1959
    },
    {
      "id" : "42",
      "author": "Jo\u00e3o Guimar\u00e3es Rosa",
      "country": "Brazil",
      "imageLink": "assets/images/the-devil-to-pay-in-the-backlands.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956
    },
    {
      "id" : "43",
      "author": "Knut Hamsun",
      "country": "Norway",
      "imageLink": "assets/images/hunger.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
      "pages": 176,
      "title": "Hunger",
      "year": 1890
    },
    {
      "id" : "44",
      "author": "Ernest Hemingway",
      "country": "United States",
      "imageLink": "assets/images/the-old-man-and-the-sea.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952
    },
    {
      "id" : "45",
      "author": "Homer",
      "country": "Greece",
      "imageLink": "assets/images/the-iliad-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad\n",
      "pages": 608,
      "title": "Iliad",
      "year": -735
    },
    {
      "id" : "46",
      "author": "Homer",
      "country": "Greece",
      "imageLink": "assets/images/the-odyssey-of-homer.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey\n",
      "pages": 374,
      "title": "Odyssey",
      "year": -800
    },
    {
      "id" : "47",
      "author": "Henrik Ibsen",
      "country": "Norway",
      "imageLink": "assets/images/a-Dolls-house.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879
    },
    {
      "id" : "48",
      "author": "James Joyce",
      "country": "Irish Free State",
      "imageLink": "assets/images/ulysses.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922
    },
    {
      "id" : "49",
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "assets/images/stories-of-franz-kafka.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
      "pages": 488,
      "title": "Stories",
      "year": 1924
    },
    {
      "id" : "50",
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "assets/images/the-trial.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial\n",
      "pages": 160,
      "title": "The Trial",
      "year": 1925
    },
    {
      "id" : "51",
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "assets/images/the-castle.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
      "pages": 352,
      "title": "The Castle",
      "year": 1926
    },
    {
      "id" : "52",

      "author": "K\u0101lid\u0101sa",
      "country": "India",
      "imageLink": "assets/images/the-recognition-of-shakuntala.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
      "pages": 147,
      "title": "The recognition of Shakuntala",
      "year": 150
    },
    {
      "id" : "53",
      "author": "Yasunari Kawabata",
      "country": "Japan",
      "imageLink": "assets/images/the-sound-of-the-mountain.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954
    },
    {
      "id" : "54",
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "imageLink": "assets/images/zorba-the-greek.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946
    },
    {
      "id" : "55",
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "imageLink": "assets/images/sons-and-lovers.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913
    },
    {
      "id" : "56",
      "author": "Halld\u00f3r Laxness",
      "country": "Iceland",
      "imageLink": "assets/images/independent-people.jpg",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People\n",
      "pages": 470,
      "title": "Independent People",
      "year": 1934
    },
    {
      "id" : "57",
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "imageLink": "assets/images/poems-giacomo-leopardi.jpg",
      "language": "Italian",
      "link": "\n",
      "pages": 184,
      "title": "Poems",
      "year": 1818
    },
    {
      "id" : "58",
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "imageLink": "assets/images/the-golden-notebook.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962
    },
    {
      "id" : "59",
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "imageLink": "assets/images/pippi-longstocking.jpg",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945
    },
    {
      "id" : "60",
      "author": "Lu Xun",
      "country": "China",
      "imageLink": "assets/images/diary-of-a-madman.jpg",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918
    },
    {
      "id" : "61",
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "imageLink": "assets/images/children-of-gebelawi.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959
    },
    {
      "id" : "62",
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "assets/images/buddenbrooks.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901
    },
    {
      "id" : "63",
      "author": "Thomas Mann",
      "country": "Germany",
      "imageLink": "assets/images/the-magic-mountain.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924
    },
    {
      "id" : "64",
      "author": "Herman Melville",
      "country": "United States",
      "imageLink": "assets/images/moby-dick.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick\n",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851
    },
    {
      "id" : "65",
      "author": "Michel de Montaigne",
      "country": "France",
      "imageLink": "assets/images/essais.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      "pages": 404,
      "title": "Essays",
      "year": 1595
    },
    {
      "id" : "66",
      "author": "Elsa Morante",
      "country": "Italy",
      "imageLink": "assets/images/history.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)\n",
      "pages": 600,
      "title": "History",
      "year": 1974
    },
    {
      "id" : "67",
      "author": "Toni Morrison",
      "country": "United States",
      "imageLink": "assets/images/beloved.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      "pages": 321,
      "title": "Beloved",
      "year": 1987
    },
    {
      "id" : "68",
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "imageLink": "assets/images/the-tale-of-genji.jpg",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      "pages": 1360,
      "title": "The Tale of Genji",
      "year": 1006
    },
    {
      "id" : "69",
      "author": "Robert Musil",
      "country": "Austria",
      "imageLink": "assets/images/the-man-without-qualities.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931
    },
    {
      "id" : "70",
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "imageLink": "assets/images/lolita.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita\n",
      "pages": 317,
      "title": "Lolita",
      "year": 1955
    },
    {
      "id" : "71",
      "author": "George Orwell",
      "country": "United Kingdom",
      "imageLink": "assets/images/nineteen-eighty-four.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "year": 1949
    },
    {
      "id" : "72",
      "author": "Ovid",
      "country": "Roman Empire",
      "imageLink": "assets/images/the-metamorphoses-of-ovid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses\n",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100
    },
    {
      "id" : "73",
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "imageLink": "assets/images/the-book-of-disquiet.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928
    },
    {
      "id" : "74",
      "author": "Edgar Allan Poe",
      "country": "United States",
      "imageLink": "assets/images/tales-and-poems-of-edgar-allan-poe.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
      "pages": 842,
      "title": "Tales",
      "year": 1950
    },
    {
      "id" : "76",
      "author": "Marcel Proust",
      "country": "France",
      "imageLink": "assets/images/a-la-recherche-du-temps-perdu.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920
    },
    {
      "id" : "77",
      "author": "Fran\u00e7ois Rabelais",
      "country": "France",
      "imageLink": "assets/images/gargantua-and-pantagruel.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533
    },
    {
      "id" : "78",
      "author": "Juan Rulfo",
      "country": "Mexico",
      "imageLink": "assets/images/pedro-paramo.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
      "pages": 124,
      "title": "Pedro P\u00e1ramo",
      "year": 1955
    },
    {
      "id" : "79",
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "imageLink": "assets/images/the-masnavi.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi\n",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236
    },
    {
      "id" : "80",
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "imageLink": "assets/images/midnights-children.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981
    },
    {
      "id" : "81",
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "imageLink": "assets/images/bostan.jpg",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)\n",
      "pages": 298,
      "title": "Bostan",
      "year": 1257
    },
    {
      "id" : "82",
      "author": "Tayeb Salih",
      "country": "Sudan",
      "imageLink": "assets/images/season-of-migration-to-the-north.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966
    },
    {
      "id" : "83",
      "author": "Jos\u00e9 Saramago",
      "country": "Portugal",
      "imageLink": "assets/images/blindness.jpg",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
      "pages": 352,
      "title": "Blindness",
      "year": 1995
    },
    {
      "id" : "84",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "assets/images/hamlet.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet\n",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603
    },
    {
      "id" : "85",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "assets/images/king-lear.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear\n",
      "pages": 384,
      "title": "King Lear",
      "year": 1608
    },
    {
      "id" : "86",
      "author": "William Shakespeare",
      "country": "England",
      "imageLink": "assets/images/othello.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello\n",
      "pages": 314,
      "title": "Othello",
      "year": 1609
    },
    {
      "id" : "87",
      "author": "Sophocles",
      "country": "Greece",
      "imageLink": "assets/images/oedipus-the-king.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430
    },
    {
      "id" : "88",
      "author": "Stendhal",
      "country": "France",
      "imageLink": "assets/images/le-rouge-et-le-noir.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830
    },
    {
      "id" : "89",
      "author": "Laurence Sterne",
      "country": "England",
      "imageLink": "assets/images/the-life-and-opinions-of-tristram-shandy.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    },
    {
      "id" : "90",
      "author": "Italo Svevo",
      "country": "Italy",
      "imageLink": "assets/images/confessions-of-zeno.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923
    },
    {
      "id" : "91",
      "author": "Jonathan Swift",
      "country": "Ireland",
      "imageLink": "assets/images/gullivers-travels.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726
    },
    {
      "id" : "92",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "assets/images/war-and-peace.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace\n",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867
    },
    {
      "id" : "93",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "assets/images/anna-karenina.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina\n",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877
    },
    {
      "id" : "94",
      "author": "Leo Tolstoy",
      "country": "Russia",
      "imageLink": "assets/images/the-death-of-ivan-ilyich.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886
    },
    {
      "id" : "95",
      "author": "Mark Twain",
      "country": "United States",
      "imageLink": "assets/images/the-adventures-of-huckleberry-finn.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884
    },
    {
      "id" : "96",
      "author": "Valmiki",
      "country": "India",
      "imageLink": "assets/images/ramayana.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana\n",
      "pages": 152,
      "title": "Ramayana",
      "year": -450
    },
    {
      "id" : "97",
      "author": "Virgil",
      "country": "Roman Empire",
      "imageLink": "assets/images/the-aeneid.jpg",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid\n",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23
    },
    {
      "id" : "98",
      "author": "Vyasa",
      "country": "India",
      "imageLink": "assets/images/the-mahab-harata.jpg",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700
    },
    {
      "id" : "99",
      "author": "Walt Whitman",
      "country": "United States",
      "imageLink": "assets/images/leaves-of-grass.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
      "pages": 152,
      "title": "Leaves of Grass",
      "year": 1855
    },
    {
      "id" : "100",
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "assets/images/mrs-dalloway.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
      "pages": 216,
      "title": "Mrs Dalloway",
      "year": 1925
    },
    {
      "id" : "101",
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "imageLink": "assets/images/to-the-lighthouse.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
      "pages": 209,
      "title": "To the Lighthouse",
      "year": 1927
    },
    {
      "id" : "102",
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "imageLink": "assets/images/memoirs-of-hadrian.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951
    }
  ]
}
