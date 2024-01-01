'use client'
import { ArrowUp } from 'lucide-react';
import {useState, useEffect} from'react'

interface UpVoteButtonProps {}

const UpVoteButton:React.FC<UpVoteButtonProps> = () => {

const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
setIsMounted(true);
}, []);

if (!isMounted) {
return null;
}
  return (
    <div>
      <ArrowUp/>
    </div>
  );
}
export default UpVoteButton;