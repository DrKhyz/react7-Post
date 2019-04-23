import React, { useState } from 'react'
import axios from 'axios'
import './MyForm.module.css'

const MyForm = props => {
	const [name, setName] = useState('')
	const [poster, setPoster] = useState('')
	const [comment, setComment] = useState('')
	const [msgSend, setMsgSend] = useState('')

	const clearState = () => {
		setName('')
		setPoster('')
		setComment('')
	}

	const handlePostData = e => {
		axios({
			method: 'post',
			url: 'http://campus-bordeaux.ovh:3001/api/quests/movies/',
			data: { name, poster, comment },
			config: { headers: { 'Content-Type': 'multipart/form-data' } },
		})

		setMsgSend('Movie Added')
		clearState()
		setTimeout(() => setMsgSend(''), 10000)
		e.preventDefault()
	}

	return (
		<div>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: 'auto',
				}}>
				{msgSend}
				<label>
					Name :
					<input type='text' value={name} onChange={e => setName(e.target.value)} />
				</label>
				<label>
					Poster:
					<input type='text' value={poster} onChange={e => setPoster(e.target.value)} />
				</label>
				<label>
					Comment : <br />
					<textarea
						name='comment'
						rows='5'
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
				</label>
				<input type='submit' value='Submit' onClick={e => handlePostData(e)} />
			</form>
		</div>
	)
}

export default MyForm
