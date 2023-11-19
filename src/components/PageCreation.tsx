import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import PetsIcon from "@mui/icons-material/Pets";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import EventNoteIcon from "@mui/icons-material/EventNote";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import StoreIcon from "@mui/icons-material/Store";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BathroomIcon from "@mui/icons-material/Bathroom";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArticleIcon from "@mui/icons-material/Article";
import FeedIcon from "@mui/icons-material/Feed";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export const pageMapping = {
  HomePage: {
    url: "/",
    icon: <HomeIcon />,
  },
  Verbs: {
    url: "/verbs",
    icon: <EditIcon />,
  },
  Numbers: {
    url: "/numbers",
    icon: <LooksOneIcon />,
  },
  Articles: {
    url: "/articles",
    icon: <ArticleIcon />,
  },
  Pronouns: {
    url: "/pronouns",
    icon: <FeedIcon />,
  },
};

export const otherMapping = {
  Clothes: {
    url: "/clothes",
    icon: <EmojiEmotionsIcon />,
  },
  Animals: {
    url: "/animals",
    icon: <PetsIcon />,
  },
  Foods: {
    url: "/foods",
    icon: <LunchDiningIcon />,
  },
  Colors: {
    url: "/colors",
    icon: <ColorLensIcon />,
  },
  Objects: {
    url: "/objects",
    icon: <EmojiObjectsIcon />,
  },
  Dates: {
    url: "/dates",
    icon: <EventNoteIcon />,
  },
  BodyParts: {
    url: "/bodyparts",
    icon: "🦴",
  },
  Questions: {
    url: "/questions",
    icon: <QuestionMarkIcon />,
  },
  Family: {
    url: "/family",
    icon: <Diversity3Icon />,
  },
  Emotions: {
    url: "/emotions",
    icon: <SentimentVeryDissatisfiedIcon />,
  },
  PhysicalChar: {
    url: "/physicalChar",
    icon: <PersonAddIcon />,
  },
  Personality: {
    url: "/personality",
    icon: <MoodBadIcon />,
  },
  Directions: {
    url: "/directions",
    icon: <ArrowForwardIcon />,
  },
  Supermarket: {
    url: "/supermarket",
    icon: <StoreIcon />,
  },
  Home: {
    url: "/home",
    icon: <HomeWorkIcon />,
  },
  Kitchet: {
    url: "/kitchen",
    icon: <KitchenIcon />,
  },
  Bathroom: {
    url: "/bathroom",
    icon: <BathroomIcon />,
  },
  Sports: {
    url: "/sports",
    icon: <SportsBasketballIcon />,
  },
  Weather: {
    url: "/weather",
    icon: <WbSunnyIcon />,
  },
};
