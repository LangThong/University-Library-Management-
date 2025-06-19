import BookList from "@/components/BookList";
import { sampleBooks } from "../constants";
import BookOverview from "@/components/BookOverview";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
      title="Latest Books"
      books ={sampleBooks}
      constainerClassName="mt-28"

    />
  </>
);

export default Home;