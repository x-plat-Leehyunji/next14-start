import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<h2>Not Found</h2>
			<p>페이지를 찾을 수 없습니다.</p>
			<Link href='/'>홈으로</Link>
		</div>
	);
};

export default NotFound;
