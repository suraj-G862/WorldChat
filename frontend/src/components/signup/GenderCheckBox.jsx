
const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control mt-2'>
            <label  className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""} `}>
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]"
                  checked={selectedGender==="male"}
                  onChange={()=>onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='form-control mt-2'> 
            <label  className={`label gap-2 cursor-pointer ${selectedGender==="female" ? "selected" : ""}`}>
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className="checkbox border-white checked:border-indigo-800 [--chkbg:theme(colors.blue.500)] [--chkfg:white]" 
                checked={selectedGender==="female"}
                onChange={()=>onCheckBoxChange("female")}
                />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckBox

