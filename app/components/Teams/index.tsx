import React from 'react'
import Button from '@/app/components/Hero/button'
import Team from './Team'

interface TeamsProps {
    className?: string;
}

const Teams: React.FC<TeamsProps> = ({ className }) => {
    return (
        <Team />

    )
}

export default Teams
