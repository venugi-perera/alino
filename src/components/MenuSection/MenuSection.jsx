import React, { forwardRef, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

// ---------- Demo Data ----------
const sectionsSeed = [
  {
    id: "starters",
    title: "Appetisers and Starter",
    subtitle: "Begin with a bite",
    items: [
      {
        name: "10 Puff Puff Starter",
        description: "Dumplings",
        price: "£4.99",
        rating: "84% (126)",
        image: "/menu/puff.jpeg",
      },
      {
        name: "6 Chicken Wings",
        description:
          "Juicy chicken wings, perfect as a starter to tantalize your taste buds.",
        price: "£4.99",
        rating: "88% (99)",
        image: "/menu/chicken.jpeg",
      },
      {
        name: "Fresh Fish Pepper Soup",
        description: "Fresh fish in a spicy pepper broth.",
        price: "£10.00",
        rating: "78% (23)",
        image: "/menu/fish.jpeg",
      },
      {
        name: "Fried Chicken Gizzards",
        description: "Crispy fried gizzards, a traditional African delicacy.",
        price: "£10.00",
        rating: "88% (18)",
        image: "/menu/chicken-gizzards.jpeg",
      },
      {
        name: "Assorted Meat Pepper Soup",
        description: "Hearty soup featuring assorted meats and peppers.",
        price: "£10.00",
        rating: "86% (36)",
        image: "/menu/meat-soup.jpeg",
      },
      {
        name: "Taba or Soya or Yamachoma",
        description: "Lip-smacking traditional grill goat meat.",
        price: "£12.00",
        rating: "85% (47)",
        image: "/menu/taba.jpeg",
      },
      {
        name: "Nkwobi",
        description:
          "Classic, and very popular traditional delicacy from Nigeria made from cooked cow legs smothered in thick yellow spices sauce.",
        price: "£12.00",
        rating: "61% (13)",
        image: "/menu/nkwobi.jpeg",
      },
      {
        name: "Roasted Peanuts",
        description: "Crunchy and flavorful peanuts, perfect for snacking.",
        price: "£1.99",
        image: "/menu/peanuts.jpeg",
      },
      {
        name: "2 Corn On The Cob",
        description: "",
        price: "£3.00",
        rating: "66% (18)",
        image: "/menu/corn.jpeg",
      },
    ],
  },
  {
    id: "Rice",
    title: "Rice",
    subtitle: "",
    items: [
      {
        name: "Fried Rice with Chicken",
        price: "£12.99",
        rating: "92% (102)",
        description: "Fried Rice with Chicken",
        image: "/menu/chicken-rice.png",
      },
      {
        name: "Jellof Rice with Chicken",
        price: "£12.99",
        rating: "93% (107)",
        description:
          "This is a very popular freshly made rice dish in most African countries. Made with tomatoes, onions and special spices.",
        image: "/menu/jellof.png",
      },
      {
        name: "Jellof Rice with Fish",
        price: "£13.99",
        rating: "82% (96)",
        description:
          "This is a very popular freshly made rice dish in most African countries. Made with tomatoes, onions, and special spices.",
        image: "/menu/jellof-fish.png",
      },
      {
        name: "Jellof Rice with Beef",
        price: "£12.99",
        rating: "79% (54)",
        description:
          "This is a very popular freshly made rice dish in most African countries. Made with tomatoes, onions, and special spices.",
        image: "/menu/jellof-beef.png",
      },
      {
        name: "Fried Rice with Fish",
        price: "£13.99",
        rating: "90% (20)",
        description:
          "Savory fried rice with tender fish, offering a delightful blend of flavors in every bite.",
        image: "/menu/fish-rice.png",
      },
      {
        name: "Jellof Rice with Assorted Meat",
        price: "£12.99",
        rating: "82% (56)",
        description:
          "This is a very popular freshly made rice dish in most African countries. Made with tomatoes, onions, and special spices.",
      },
      {
        name: "Fried Rice with Beef",
        price: "£12.99",
        rating: "75% (16)",
        description: "Beef and rice combined in a flavorful dish.",
      },
    ],
  },
  {
    id: "egussi-dishes",
    title: "Egussi Dishes",
    subtitle: "Special melon seed delicacies",
    items: [
      {
        name: "Egussi with Fish",
        price: "£14.99",
        rating: "76% (13)",
        description: "Egussi with Fish",
        image: "/menu/egussi-fish.png",
      },
      {
        name: "Egussi with Assorted Meat",
        price: "£13.99",
        rating: "78% (55)",
        description:
          "Special melon seeds cooked with selected African spices. Very delicious. Served with choice of your side.",
        image: "/menu/egussi-meat.png",
      },
      {
        name: "Egussi with Beef",
        price: "£13.99",
        rating: "79% (43)",
        description:
          "Special melon seeds cooked with selected African spices. Very delicious. Served with choice of your side.",
        image: "/menu/egussi-beef.png",
      },
    ],
  },
  {
    id: "curry-dishes",
    title: "Curry Dishes",
    subtitle: "Delicious African-style curries",
    items: [
      {
        name: "Goat Curry",
        price: "£13.99",
        rating: "89% (37)",
        description:
          "Special melon seeds cooked with selected African spices. Very delicious. Served with choice of your side.",
        image: "/menu/goat-curry.png",
      },
      {
        name: "Chicken Curry",
        price: "£13.99",
        description:
          "Special melon seeds cooked with selected African spices. Very delicious. Served with choice of your side.",
        image: "/menu/chicken-curry.png",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    subtitle: "Nutritious and flavorful soups",
    items: [
      {
        name: "Okra Soup",
        price: "£12.99",
        rating: "87% (115)",
        description:
          "Ladies finger or bhindi. This is an incredibly rich source of health benefits.",
        image: "/menu/okra-soup.png",
      },
      {
        name: "Ogbono Soup",
        price: "£14.99",
        rating: "77% (22)",
        // description:
        //   "Ogbono soup is a Nigerian dish made with ground ogbono seeds, and some special spices.",
        image: "/menu/ogbono-soup.png",
      },
      {
        name: "Eru Soup or Okazi Soup",
        price: "£14.99",
        rating: "89% (28)",
        description:
          "This is a nutritious dish made from a rare vegetable leaf mixed with palm oil and traditional African spices.",
        image: "/menu/eru.png",
      },
    ],
  },
  {
    id: "specials",
    title: "Specials",
    subtitle: "Chef's recommended dishes",
    items: [
      {
        name: "Fried Red Kidney Beans with Chicken",
        price: "£12.99",
        description: "Fried Red kidney Beans. Served with choice of your side.",
        badge: "Popular",
      },
      {
        name: "Fried Red Kidney Beans with Assorted Meat",
        price: "£13.99",
        description: "Fried Red kidney Beans. Served with choice of your side.",
      },
      {
        name: "Fried Red Kidney Beans with Fried Fish",
        price: "£13.99",
        description: "Fried Red kidney Beans. Served with choice of your side.",
      },
    ],
  },
  {
    id: "chefs-specials",
    title: "Chef's Specials",
    subtitle: "Signature dishes from our chef",
    items: [
      {
        name: "Poulet Dg",
        price: "£14.99",
        rating: "66% (3)",
        description:
          "This fricassee of chicken, vegetables, and savory special spices.",
        image: "/menu/poulet-dg.png",
      },
    ],
  },
  {
    id: "stew-dishes",
    title: "Stew Dishes",
    subtitle: "Hearty and flavorful stews",
    items: [
      {
        name: "Chicken Stew",
        price: "£12.99",
        rating: "90% (20)",
        description:
          "A blend of tomatoes, and some special seasoning spices. Served with choice of your side.",
        image: "/menu/chicken-stew.png",
      },
      {
        name: "Beef Stew",
        price: "£12.99",
        rating: "84% (25)",
        description:
          "A blend of tomatoes, and some special seasoning spices. Served with choice of your side.",
        image: "/menu/beef-stew.png",
      },
      {
        name: "Assorted Meat Stew",
        price: "£13.99",
        rating: "80% (21)",
        description:
          "A blend of tomatoes, and some special seasoning spices. Served with choice of your side.",
      },
      {
        name: "Fish Stew",
        price: "£13.99",
        rating: "83% (6)",
        description:
          "A blend of tomatoes, and some special seasoning spices. Served with choice of your side.",
      },
    ],
  },
  {
    id: "fish-grill",
    title: "Fish Grill",
    subtitle: "Spicy Cameroonian-style grilled fish",
    items: [
      {
        name: "Tilapia",
        price: "£25.00",
        rating: "82% (28)",
        description:
          "This is a spicy Cameroonian-style marinated grilled fish. Served with choice of your side.",
        image: "/menu/tilapia.png",
      },
      {
        name: "Croaker Fish",
        price: "£20.00",
        description:
          "This is a spicy Cameroonian-style marinated grilled fish. Served with choice of your side.",
      },
    ],
  },
  {
    id: "chicken-grills",
    title: "Chicken Grills",
    subtitle: "Flavoursome grilled chicken",
    items: [
      {
        name: "Chicken Grill",
        price: "£16.99",
        description:
          "Flavoursome grilled chicken. Served with choice of your side.",
      },
    ],
  },
  {
    id: "maffe-dishes",
    title: "Maffe",
    subtitle: "Grilled peanut stew cooked with selected African spices",
    items: [
      {
        name: "Maffe with Beef",
        price: "£12.99",
        rating: "70% (10)",
        description:
          "Grilled peanut stew cooked with selected African spices. Very popular meal. Served with choice of your side.",
      },
      {
        name: "Maffe with Fresh Fried Fish",
        price: "£13.99",
        description:
          "Grilled peanut stew cooked with selected African spices. Very popular meal. Served with choice of your side.",
      },
      {
        name: "Maffe with Fish",
        price: "£13.99",
        description:
          "Grilled peanut stew cooked with selected African spices. Very popular meal. Served with choice of your side.",
      },
      {
        name: "Maffe with Chicken",
        price: "£12.99",
        rating: "75% (4)",
        description:
          "Grilled peanut stew cooked with selected African spices. Very popular meal. Served with choice of your side.",
      },
    ],
  },
  {
    id: "ndole-dishes",
    title: "Ndole Dishes",
    subtitle: "Bitter Leaf Stew – Favourite Cameroonian dish",
    items: [
      {
        name: "Ndole with Chicken",
        price: "£13.99",
        description:
          "Bitter Leaf Stew. Favourite Cameroonian dish made from bitter leaf balanced with white peanut in a blend of traditional spices. Served with choice of your side.",
      },
      {
        name: "Ndole with Beef",
        price: "£13.99",
        rating: "100% (4)",
        description:
          "Bitter Leaf Stew. Favourite Cameroonian dish made from bitter leaf balanced with white peanut in a blend of traditional spices. Served with choice of your side.",
      },
      {
        name: "Ndole with Fried Fish",
        price: "£14.99",
        description:
          "Bitter Leaf Stew. Favourite Cameroonian dish made from bitter leaf balanced with white peanut in a blend of traditional spices. Served with choice of your side.",
      },
    ],
  },
  {
    id: "veggie-delight",
    title: "Veggie Delight",
    subtitle: "Vegetarian and plant-based dishes",
    items: [
      {
        name: "Veggie Delight or Fried Spinach",
        price: "£12.99",
        rating: "100% (4)",
        description: "Served with choice of your side.",
      },
    ],
  },
  {
    id: "vegetarian-dishes",
    title: "Vegetarian Dishes",
    subtitle: "Healthy plant-based options",
    items: [
      {
        name: "Okra Soup",
        price: "£10.99",
        description:
          "Also known as bhindi, ladies finger. This is incredibly rich source of health benefits. Served with choice of your side.",
        badge: "Popular",
        image: "/menu/okra-soup.png",
      },
      {
        name: "Fried Spinach",
        price: "£10.99",
        description: "Served with choice of your side.",
      },
      {
        name: "Sauteed Mixed Vegetables",
        price: "£10.99",
        description: "Served with choice of your side.",
      },
      {
        name: "Sauteed Beans",
        price: "£10.99",
        description: "Served with choice of your side.",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    subtitle: "Traditional African sides",
    items: [
      {
        name: "Fried Plantain",
        price: "£4.99",
        rating: "90% (172)",
        description:
          "Plantains have a banana look but contain more starch and less sugar. Very nutritious.",
      },
      {
        name: "10 Puff Puff or Mandazi or Dumplings",
        price: "£4.00",
        rating: "80% (20)",
        description:
          "This is a traditional homemade African snack made from baking powder and yeast.",
      },
      {
        name: "Pounded Yam",
        price: "£4.50",
        rating: "83% (24)",
        description:
          "Very popular Nigerian side dish made from boiled and pounded white yam.",
      },
      {
        name: "Fufu",
        price: "£4.50",
        rating: "88% (17)",
        description: "Made with flour from cassava roots or tubers.",
      },
      {
        name: "Boiled Rice",
        price: "£4.50",
        rating: "86% (22)",
      },
      {
        name: "Garri or Eba",
        price: "£4.50",
        rating: "80% (5)",
        description:
          "A fine to coarse granular flour from cassava roots. Popular because it can go with any African vegetable soup.",
      },
      {
        name: "Sadza or Ugali or Nsima or Banku or Mealie-Meal",
        price: "£4.50",
        description: "A steamed dumpling made from white maize flour.",
      },
      {
        name: "Chips",
        price: "£3.50",
        rating: "85% (7)",
        description: "Thinly sliced fried potatoes.",
      },
      {
        name: "Semolina",
        price: "£4.50",
        rating: "100% (3)",
        description: "Coarse purified wheat middling used to make couscous.",
      },
      {
        name: "Atieke",
        price: "£4.50",
        rating: "100% (6)",
        description: "Western Africa version of gari.",
      },
      {
        name: "Bobolo",
        price: "£4.99",
        description: "Made from cassava tubers and cooked in leaf.",
      },
    ],
  },
  {
    id: "african-juices",
    title: "African Juices",
    subtitle: "Refreshing African-inspired drinks",
    items: [
      {
        name: "Fanta African Juice",
        price: "£4.50",
        description: "Fruity and refreshing African-inspired drink.",
        badge: "Popular",
      },
      {
        name: "Supermalt African Juice",
        price: "£3.50",
        rating: "100% (10)",
        description: "Refreshing African-inspired malt drink.",
      },
    ],
  },
];

// ---------- Utility ----------
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// ---------- Shared Page ----------
const Page = forwardRef(({ children, className }, ref) => (
  <div
    ref={ref}
    className={
      "relative h-full w-full bg-neutral-50 [box-shadow:0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden " +
      (className || "")
    }
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-neutral-200" />
    <div className="h-full w-full p-6 sm:p-10">{children}</div>
  </div>
));
Page.displayName = "Page";

// ---------- Specific Pages ----------
const CoverPage = forwardRef(({ restaurant, tagline }, ref) => (
  <Page ref={ref} className="bg-gradient-to-br from-amber-50 to-orange-100">
    <div className="flex h-full flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight"
      >
        {restaurant}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-base sm:text-lg text-neutral-600"
      >
        {tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 rounded-2xl border bg-white/70 px-4 py-2 text-sm"
      >
        Open today • 11:00 – 22:30
      </motion.div>
    </div>
    <div className="absolute bottom-4 right-4 text-xs text-neutral-500">
      Swipe / drag to flip ➔
    </div>
  </Page>
));
CoverPage.displayName = "CoverPage";

const SectionPage = forwardRef(({ title, subtitle, items }, ref) => (
  <Page ref={ref}>
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 gap-4 pb-5">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-lg object-cover flex-shrink-0"
              />
            )}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-semibold">{item.name}</p>
                {item.description && (
                  <p className="text-sm text-neutral-600">{item.description}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-base font-semibold">{item.price}</p>
                {item.badge && (
                  <span className="mt-1 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Page>
));
SectionPage.displayName = "SectionPage";

const InfoPage = forwardRef((_, ref) => (
  <Page ref={ref}>
    <div className="flex h-full flex-col">
      <h2 className="text-2xl font-bold tracking-tight">About Us</h2>
      <p className="mt-2 text-sm text-neutral-700">
        Welcome to{" "}
        <span className="font-semibold">Alino African Restaurant</span>, where
        seasonal produce meets cozy vibes. Our kitchen crafts familiar classics
        with a modern twist. Thank you for dining with us!
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white/60 p-4">
          <p className="text-sm font-semibold">Location</p>
          <p className="text-sm text-neutral-600">123 Ocean Drive, Havelock</p>
        </div>
        <div className="rounded-2xl border bg-white/60 p-4">
          <p className="text-sm font-semibold">Contact</p>
          <p className="text-sm text-neutral-600">
            +94 77 123 4567 • hello@sunsetbistro.com
          </p>
        </div>
      </div>

      <div className="mt-auto text-[11px] text-neutral-500">
        © {new Date().getFullYear()} Alino. All rights reserved.
      </div>
    </div>
  </Page>
));
InfoPage.displayName = "InfoPage";

const BackCoverPage = forwardRef((_, ref) => (
  <Page ref={ref} className="bg-gradient-to-tr from-neutral-100 to-neutral-50">
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-neutral-600">See you again soon 👋</p>
    </div>
  </Page>
));
BackCoverPage.displayName = "BackCoverPage";

// ---------- Main Component ----------
export default function MenuFlipbook() {
  const flipRef = useRef(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3; // max items per page

  const pages = useMemo(() => {
    const arr = [];

    arr.push(
      <CoverPage
        key="cover"
        restaurant="Alino African Restaurant"
        tagline="Modern comfort food & coastal cocktails"
      />
    );

    sectionsSeed.forEach((section) => {
      const chunks = chunkArray(section.items, itemsPerPage);
      chunks.forEach((chunk, idx) => {
        arr.push(
          <SectionPage
            key={`${section.id}-${idx}`}
            title={
              section.title + (chunks.length > 1 ? ` (Page ${idx + 1})` : "")
            }
            subtitle={section.subtitle}
            items={chunk}
          />
        );
      });
    });

    arr.push(<InfoPage key="info" />);
    arr.push(<BackCoverPage key="back" />);
    return arr;
  }, []);

  const total = pages.length;

  const goPrev = () => flipRef.current?.pageFlip()?.flipPrev();
  const goNext = () => flipRef.current?.pageFlip()?.flipNext();
  const goTo = (p) => flipRef.current?.pageFlip()?.flip(p);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:py-10">
      {/* Header / Controls */}
      <div className="mb-4 flex flex-col items-center justify-between gap-3 sm:mb-6 sm:flex-row">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Restaurant Menu</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            aria-label="Previous page"
            className="rounded-2xl border px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-50 active:scale-[0.98]"
          >
            ◀ Prev
          </button>
          <span className="select-none text-sm tabular-nums">
            {String(page + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={goNext}
            aria-label="Next page"
            className="rounded-2xl border px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-50 active:scale-[0.98]"
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Book */}
      <div className="mx-auto flex w-full max-w-5xl justify-center">
        <HTMLFlipBook
          width={520}
          height={700}
          minWidth={300}
          maxWidth={650}
          maxHeight={900}
          size="stretch"
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startPage={0}
          autoSize={true}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={(e) => setPage(e.data)}
          ref={flipRef}
          className="[perspective:1800px]"
        >
          {pages.map((node, idx) => (
            <div key={idx} className="h-full w-full">
              {node}
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Quick Navigator */}
      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-4">
        {sectionsSeed.map((s, i) => {
          const target = i + 1; // first page of section after cover
          const active = page === target;
          return (
            <button
              key={s.id}
              onClick={() => goTo(target)}
              className={
                "rounded-2xl border px-3 py-2 text-sm shadow-sm transition hover:bg-neutral-50 " +
                (active ? "border-amber-400 ring-2 ring-amber-200" : "")
              }
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
