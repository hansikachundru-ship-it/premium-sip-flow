import matchaLatteDefault from "@/assets/menu/matcha-latte-default.png";
const pureImg = matchaLatteDefault;
const honeyImg = matchaLatteDefault;
const vanillaSilkImg = matchaLatteDefault;
import strawberryImg from "@/assets/menu/strawberry.png";
import blueberryImg from "@/assets/menu/blueberry.png";
import raspberryImg from "@/assets/menu/raspberry.png";
import mangoImg from "@/assets/menu/mango.png";
import caramelToffeeImg from "@/assets/menu/caramel-toffee.png";
import bananaPuddingImg from "@/assets/menu/banana-pudding.png";
import cookieButterImg from "@/assets/menu/cookie-butter.png";
import rosyRoseImg from "@/assets/menu/rosy-rose.png";
import peachCobblerImg from "@/assets/menu/peach-cobbler.png";
import vanillaSoftServeImg from "@/assets/menu/vanilla-soft-serve.png";
import strawberrySoftServeImg from "@/assets/menu/strawberry-soft-serve.png";

export interface MenuItem {
  num: number;
  name: string;
  desc: string;
  image?: string;
  badge?: string;
  sweetness?: string;
}

export const classicLattes: MenuItem[] = [
  { num: 1, name: "Pure Iced Matcha Latte", desc: "Uji Reserve Matcha shaken with milk. Unsweetened, clean, and bold.", image: pureImg, sweetness: "0/5" },
  { num: 2, name: "Honey Iced Matcha Latte", desc: "Uji Reserve Matcha lightly sweetened with natural honey.", image: honeyImg, sweetness: "2/5" },
  { num: 3, name: "Vanilla Silk Iced Matcha Latte", desc: "Uji Reserve Matcha with a subtle hint of French vanilla.", image: vanillaSilkImg, sweetness: "2/5" },
  { num: 4, name: "Strawberry Iced Matcha Latte", desc: "Lightly sweet, fruity, and smooth strawberry with Uji Reserve Matcha.", image: strawberryImg, sweetness: "2/5" },
  { num: 5, name: "Blueberry Vanilla Iced Matcha Latte", desc: "A perfect balance of Uji Reserve Matcha, Blueberry & Vanilla.", image: blueberryImg, sweetness: "2/5" },
  { num: 6, name: "Raspberry Iced Matcha Latte", desc: "Subtle tangy & fruity punch of raspberry with Uji Reserve Matcha.", image: raspberryImg, sweetness: "2/5" },
  { num: 7, name: "Mango Iced Matcha Latte", desc: "A perfect combination of tropical mango paired with Uji Reserve Matcha.", image: mangoImg, badge: "Best Seller", sweetness: "3/5" },
  { num: 8, name: "Caramel Toffee Iced Matcha Latte", desc: "Rich toffee caramel blended with Uji Reserve Matcha.", image: caramelToffeeImg, sweetness: "3/5" },
];

export const cloudLattes: MenuItem[] = [
  { num: 1, name: "Banana Pudding Cloud Iced Matcha Latte", desc: "Creamy banana, soft biscuit notes, and smooth Uji Reserve Matcha.", sweetness: "4/5 (Medium Sweet)", badge: "Best Seller", image: bananaPuddingImg },
  { num: 2, name: "Cookie Butter Cloud Iced Matcha Latte", desc: "Buttery cookie cream swirled with smooth Uji Reserve Matcha.", sweetness: "5/5 (Sweet)", badge: "Best Seller", image: cookieButterImg },
  { num: 3, name: "Rosy Cloud Iced Matcha Latte", desc: "Delicate rose notes cloud layered over smooth Uji Reserve Matcha.", sweetness: "3/5 (Mild Sweet)", image: rosyRoseImg },
  { num: 4, name: "Peach Cobbler Cloud Iced Matcha Latte", desc: "Juicy peach cobbler dessert notes layered over Uji Reserve Matcha.", sweetness: "3/5 (Mild Sweet)", image: peachCobblerImg },
];

export const softServes: MenuItem[] = [
  { num: 1, name: "Vanilla Silk Premium Soft Serve", desc: "Creamy perfectly balanced vanilla soft serve.", sweetness: "3/5 (Mild Sweet)", image: vanillaSoftServeImg },
  { num: 2, name: "Strawberry Crush Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)", image: strawberrySoftServeImg },
  { num: 3, name: "Vanilla & Strawberry Swirl Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)" },
];

export const desserts: MenuItem[] = [
  { num: 1, name: "Matcha Cookie", desc: "Perfectly balanced matcha cookie with a soft, buttery center." },
  { num: 2, name: "Matcha Cheesecakes", desc: "Silky matcha cheesecake with a soft, creamy texture and balanced sweetness." },
];

export const savouryTreats: MenuItem[] = [
  { num: 1, name: "Onigiri", desc: "Perfectly seasoned Japanese rice ball with a savory, comforting filling." },
  { num: 2, name: "Toasts", desc: "Crispy toast loaded with bold, balanced flavours." },
];
