import './Toggle.css'

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className='toggle-container'>
            <div className='toggle-position'>
                <input
                    type='checkbox'
                    id='check'
                    className='toggle'
                    onChange={handleChange}
                    checked={isChecked}>
                </input>
                <label htmlFor='check'>Theme</label>
            </div>
        </div>
    )
}

export default Toggle
