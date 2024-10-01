import spotify_logo from './Spotify_Full_Logo_RGB_White.png'
import home_icon from './home-sharp.svg'
import search_icon from './search.svg'
import layer_icon from './layers.svg'
import add_icon from './add-outline.svg'
import shuffle_icon from './shuffle-outline.svg'
import prev_button from './play-skip-back-outline.svg'
import next_button from './play-skip-forward-outline.svg'
import play_button from './play-outline.svg'
import loop_ico from './infinite-outline.svg'
import radio_ico from './radio-outline.svg'
import stack_ico from './reorder-two-outline.svg'
import resize_ico from './resize-outline.svg'
import volume_ico from './volume-medium-outline.svg'
import pause_button from './pause-outline.svg'
import backward_button from './chevron-back-outline.svg'
import forward_button from './chevron-forward-outline.svg'
import clock_ico from './time-outline.svg'
import coldplay from './coldplay.jpeg'
import one_direction from './one-direction-radio.jpeg'
import justin_bieber from './justin-bieber-radio.jpeg'
import throwsback_2023 from './top-throwsback-2023.jpeg'
import ed_sheeran from './ed-sheeran-radio.jpeg'
import big_dawgs from './big-dawgs-hanumankind.jpeg'
import glory_yo_yo from './glory_yo_yo_honey.jpeg'
import rare_selena from './rare-selena-gomez.jpeg'
import arijit_world from './arijit-world-special.jpeg'
import alan_walker from './alan_walker.jpeg'
import charlie_puth from './charlie_puth.jpeg'
import john_cena from './john_cena.jpeg'
import peaky_blinders from './peaky_blinders.jpeg'
import taylor_swift from './taylor_swift_1989.jpeg'
import zayn_album from './zayn_room_under_the_stairs.jpeg'




import Let_Me_Zayn from "./Let Me - ZAYN.mp3"
import zayn_profile from './zayn-profile.jpeg'
import glory_img from './glory.jpeg'



// Assets data
export const assets = {
    spotify_logo,
    home_icon,
    search_icon,
    layer_icon,
    add_icon,
    shuffle_icon,
    prev_button,
    next_button,
    play_button,
    pause_button,
    loop_ico,
    radio_ico,
    stack_ico,
    resize_ico,
    volume_ico,
    backward_button,
    forward_button,
    zayn_profile,
    glory_img,
    clock_ico,
    one_direction,
    justin_bieber,
    throwsback_2023,
    coldplay,
    ed_sheeran,
    rare_selena,
    big_dawgs,
    arijit_world,
    glory_yo_yo,
    alan_walker,
    john_cena,
    taylor_swift,
    peaky_blinders,
    charlie_puth,
    zayn_album
}

// Albums array data:
export const albumsData = [
    {
        id: 0,
        name: "Justin Bieber",
        image: justin_bieber,
        description: "Hits of JB",
        bgColor: "#38FEA8"
    },

    {
        id: 1,
        name: "Coldplay Radio",
        image: coldplay,
        description: "Listen to Coldplay",
        bgColor: "#6687FF"
    },

    {
        id: 2,
        name: "Throwbacks 2023",
        image: throwsback_2023,
        description: "Best of 2023 Hits",
        bgColor: "#0077FF"
    },

    {
        id: 3,
        name: "One Direction Radio",
        image: one_direction,
        description: "One Direction special",
        bgColor: "#FF6682"
    },

    {
        id: 4,
        name: "Millionaire",
        image: glory_yo_yo,
        description: "GLORY",
        bgColor: "#2E2D2D"
    },

    {
        id: 5,
        name: "Rare EP",
        image: rare_selena,
        description: "New Arrival",
        bgColor: "#E41111"
    },

    {
        id: 6,
        name: "Arijit World Special",
        image: arijit_world,
        description: "World Tour Special",
        bgColor: "#35BB9E"
    },

    {
        id: 7,
        name: "Ed Sheeran",
        image: ed_sheeran,
        description: "Listen Ed Sheeran",
        bgColor: "#FFD70F"
    }
]


// Songs array data:
export const songsData = [
    {
        id: 0,
        name: "Stardust",
        image: zayn_album,
        file: Let_Me_Zayn,
        description: "Rooms Under The Stairs",
        duration: "3:05"
    },

    {
        id: 1,
        name: "Big Dawgs",
        image: big_dawgs,
        file: Let_Me_Zayn,
        description: "Hanumankind, Khalani",
        duration: "3:05"
    },

    {
        id: 2,
        name: "Millionaire",
        image: glory_yo_yo,
        file: Let_Me_Zayn,
        description: "Yo Yo Honey Singh",
        duration: "3:05"
    },

    {
        id: 3,
        name: "Red Right Hands",
        image: peaky_blinders,
        file: Let_Me_Zayn,
        description: "Peaky Blinders OST",
        duration: "3:05"
    },

    {
        id: 4,
        name: "1969",
        image: taylor_swift,
        file: Let_Me_Zayn,
        description: "Taylor Swift",
        duration: "3:05"
    },

    {
        id: 5,
        name: "Time Is Now",
        image: john_cena,
        file: Let_Me_Zayn,
        description: "John Cena, WWE Music",
        duration: "3:05"
    },

    {
        id: 6,
        name: "Light Switch",
        image: charlie_puth,
        file: Let_Me_Zayn,
        description: "Charlie Puth",
        duration: "3:05"
    }
]