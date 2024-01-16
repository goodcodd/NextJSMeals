import classes from './page.module.css';
import Link from "next/link";
import ImageSlideshow from "../components/images/image-slideshow";
export default function Home() {
  return (
      <>
        <header className={classes.header}>
            <div className={classes.slideshow}>
                <ImageSlideshow />
            </div>
            <div>
                <div className={classes.hero}>
                    <h1>NextLevel Food</h1>
                    <p>Taste & share food from all over the world</p>
                </div>
                <div className={classes.cta}>
                    <Link href="/community">Join the community</Link>
                    <Link href="/meals">Explore meals</Link>
                </div>
            </div>
        </header>

        <main>

        </main>
    </>
);
}
