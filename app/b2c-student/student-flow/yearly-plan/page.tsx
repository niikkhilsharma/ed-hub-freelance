import Header from '@/components/layout/Header';
import Curriculum from './component'
import React from 'react'

const YearlyPlan = () => {
	const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/images/person.jpg" };
	return <>
		<Header user={headerUser} />
		<Curriculum />
	</>
}

export default YearlyPlan;
