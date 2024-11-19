import { ReactNode } from 'react'
import classes from './HangmanModal.module.css'
type HangmanModalProps = {
    children: ReactNode 
    visible: boolean
    setVisible: any
}
export function HangmanModal ({ children, visible, setVisible } : HangmanModalProps) {
    const rootClasses = [classes.myModal];
	!visible ? rootClasses.push(classes.active) : '';
	return (
		<div
			onClick={() => setVisible(false)}
			className={rootClasses.join(' ')}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={classes.myModalContent}
			>
				{children}
			</div>
			<p>Hello</p>
		</div>
	);
}