'use client'
import { ArrowDown } from 'lucide-react';
import {useState, useEffect} from'react'

interface DownVoteButtonProps {}

const DownVoteButton:React.FC<DownVoteButtonProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div>
      <ArrowDown/>
    </div>
  );
}
export default DownVoteButton;