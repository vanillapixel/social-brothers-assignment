import { useState, useEffect, useMemo } from "react";

import Controller from "./Controller";
import PageNumber from "./PageNumber";

import { Button, Card } from "../elements";

import {
	DoublePreviousIcon,
	DoubleNextIcon,
	NextIcon,
	PreviousIcon,
} from "../elements/icons";

// Not worth a resize listener
const PAGE_NUMBERS_LIMIT = window.innerWidth < 720 ? 3 : 5;

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
	const [pageNumbersSets, setPageNumbersSets] = useState(0);
	const [currentPageNumbersSet, setCurrentPageNumbersSet] = useState(0);

	const updatePageNumbersSets = (e) => {
		const newPageNumber = +e.target.textContent;
		setCurrentPage(newPageNumber);
		setCurrentPageNumbersSet(Math.ceil(newPageNumber / PAGE_NUMBERS_LIMIT) - 1);
	};
	const setPreviousPage = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
		setCurrentPageNumbersSet(
			Math.ceil((currentPage - 1) / PAGE_NUMBERS_LIMIT) - 1
		);
	};

	const setNextPage = () => {
		if (currentPage === arrayOfPages.length) return;
		setCurrentPage(currentPage + 1);
		setCurrentPageNumbersSet(Math.floor(currentPage / PAGE_NUMBERS_LIMIT));
	};

	const setPreviousPageNumbersSet = () => {
		if (currentPageNumbersSet === 0) return;
		setCurrentPageNumbersSet(currentPageNumbersSet - 1);
		setCurrentPage(currentPageNumbersSet * PAGE_NUMBERS_LIMIT);
	};

	const setNextPageNumbersSet = () => {
		if (currentPageNumbersSet === pageNumbersSets - 1) return;
		setCurrentPageNumbersSet(currentPageNumbersSet + 1);

		setCurrentPage((currentPageNumbersSet + 1) * PAGE_NUMBERS_LIMIT + 1);
	};

	let arrayOfPages = useMemo(
		() => Array.from({ length: totalPages }, (_, i) => i + 1),
		[totalPages]
	);

	const filteredPageNumbers = useMemo(() => {
		return arrayOfPages
			.slice(
				currentPageNumbersSet * PAGE_NUMBERS_LIMIT,
				(currentPageNumbersSet + 1) * PAGE_NUMBERS_LIMIT
			)
			.map((pageNumber) => (
				<PageNumber
					key={pageNumber}
					pageNumber={pageNumber}
					onClick={() => setCurrentPage(pageNumber)}
					isActive={currentPage === pageNumber}
				/>
			));
	}, [arrayOfPages, currentPageNumbersSet, currentPage, setCurrentPage]);

	useEffect(() => {
		const pageNumberSets = Math.ceil(arrayOfPages.length / PAGE_NUMBERS_LIMIT);

		setPageNumbersSets(pageNumberSets);
		setCurrentPageNumbersSet(0);
	}, [totalPages, arrayOfPages.length]);

	return (
		<Card
			style={{ alignSelf: "center" }}
			size="none"
			flexDirection="row"
			justifyContent="spaceBetween"
			css={{ "@mobile": { width: "100%", maxWidth: "100%" } }}
		>
			<Controller
				id={"double-previous-icon"}
				icon={<DoublePreviousIcon />}
				onClick={setPreviousPageNumbersSet}
				isDisabled={currentPageNumbersSet === 0}
			/>
			<Controller
				id={"previous-icon"}
				icon={<PreviousIcon />}
				onClick={setPreviousPage}
				isDisabled={currentPage === 1}
			/>

			<Card flexDirection="row" padding="xs" gap="xs">
				{currentPageNumbersSet > 0 && (
					<>
						<PageNumber
							pageNumber={arrayOfPages[0]}
							onClick={updatePageNumbersSets}
						/>
						<Button style={{ opacity: 1 }} icon disabled>
							...
						</Button>
					</>
				)}

				{filteredPageNumbers}

				{currentPageNumbersSet < pageNumbersSets - 1 && (
					<>
						<Button style={{ opacity: 1 }} icon disabled>
							...
						</Button>
						<PageNumber
							pageNumber={arrayOfPages.length}
							onClick={updatePageNumbersSets}
						/>
					</>
				)}
			</Card>

			<Controller
				id={"next-icon"}
				icon={<NextIcon />}
				onClick={setNextPage}
				isDisabled={currentPage === arrayOfPages.length}
			/>
			<Controller
				id={"double-next-icon"}
				icon={<DoubleNextIcon />}
				onClick={setNextPageNumbersSet}
				isDisabled={currentPageNumbersSet === pageNumbersSets - 1}
			/>
		</Card>
	);
};

export default Pagination;
