import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropsTypes from 'prop-types';

// * components
import Label from '../Input/Label';
import SearchInput from '../Input/SearchInput';

export default function SearchLayout({ label, isArchive = false }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchTitle = searchParams.get('query');
  const searchTitle = typeof getSearchTitle === 'string'
    ? getSearchTitle : '';

  const handleSearchInput = (e) => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <section className="flex justify-center items-center px-8 ">
      <Label
        htmlFor="search-note"
        className="flex justify-center items-center flex-col gap-5 w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] z-[2]"
      >
        <h2 className="text-textMedium font-semibold font-script text-3xl">
          {label}
        </h2>

        <SearchInput
          id="search-note"
          onChange={(e) => handleSearchInput(e)}
          value={searchTitle}
          isArchive={isArchive}
        />
      </Label>
    </section>
  );
}

SearchLayout.propTypes = {
  label: PropsTypes.string.isRequired,
  isArchive: PropsTypes.bool,
};

SearchLayout.defaultProps = {
  isArchive: false,
};
