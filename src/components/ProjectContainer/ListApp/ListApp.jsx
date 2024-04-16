import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Delete, Create } from '@mui/icons-material';
import { CssBaseline, TextField, InputAdornment } from '@mui/material';
import './ListApp.css'

const initialList = () => {
    const data = JSON.parse(localStorage.getItem('list'))
    if (!data) {
        return []
    }
    return data;
}
export default function ListApp({ project }) {
    const [list, setList] = useState(initialList);
    const [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem(
            'list',
            JSON.stringify(list)
        )
    }, [list])

    const removeList = (id) => {
        setList((prevList) => {
            return prevList.filter((t) => t.id !== id)
        })
    }
    const handleToggle = (id) => {
        setList((prevList) => {
            return prevList.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted }
                } else {
                    return item
                }
            })
        })
    }
    const handleText = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addList(text)
        setText('')
    }
    const addList = (text) => {
        setList((prevList) => {
            return [...prevList, { id: crypto.randomUUID(), text: text, isCompleted: false }]
        })
    }

    return (
        <div className='project'>
            <CssBaseline />
            <h3>{project.name}</h3>
            <p className='project__description'>{project.description}</p>
            <div>
                <List sx={{
                    width: '100%', maxWidth: 360, bgcolor: 'background.paper'
                }}>
                    {list.map(item => {
                        const labelId = `checkbox-list-label-${item.id}`;

                        return (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments" onClick={() => removeList(item.id)}>
                                        <Delete />
                                    </IconButton>
                                }
                                disablePadding
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'rgba(198,198,198,0.75)'
                                    }
                                }}
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={item.isCompleted}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            onChange={() => { handleToggle(item.id) }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={item.text} sx={{ color: 'black', '&:hover': { bgcolor: 'none' } }} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })
                    }
                    {!list[0] && <p style={{ color: 'black' }}>Doesn't have list yet</p>}
                    <div className='spacer'></div>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Add List"
                            variant="filled" focused
                            sx={{ bgcolor: 'rgba(148,148,148,0.5)', width: '90%' }}
                            onChange={handleText}
                            value={text}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="create list"
                                        edge="end"
                                        onClick={handleSubmit}
                                    >
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                    </form>

                </List>
            </div>
        </div >

    );
}