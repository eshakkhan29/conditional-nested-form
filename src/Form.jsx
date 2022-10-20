import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const Form = () => {
    const [formData, setFormData] = useState({});
    const [singleInput, setSingleInput] = useState([]);
    const [inputGroups, setInputGroups] = useState([]);
    const { register, handleSubmit } = useForm();
    const onChange = data => {
        setFormData(data);
    };
    console.log(formData)
    console.log(singleInput)
    console.log(inputGroups)
    const handesub = (e) => {
        e.preventDefault()
    }

    // Add single input 
    const addInput = () => {
        setSingleInput(singleInput => {
            return [
                ...singleInput,
                {
                    type: "text",
                    name: "item"
                }
            ];
        });
    };

    // Add input groups
    const addInputGroups = () => {
        setInputGroups(inputGroups => {
            return [
                ...inputGroups,
                {
                    type: "text",
                    name: "input"
                },
                {
                    type: "text",
                    name: "input2"
                },
                {
                    type: "text",
                    name: "input3"
                },
                {
                    type: "text",
                    name: "input4"
                },
                {
                    type: "text",
                    name: "input5"
                }
            ];
        });
    };

    useEffect(() => {
        if (formData.input === "object") {
            addInputGroups();
        }
    }, [formData.input]);


    return (
        <div>
            <form onSubmit={handesub} onChange={handleSubmit(onChange)}>
                <input placeholder='name' {...register("Collation")} /> <br />
                <textarea placeholder='Description' {...register("Description")} /> <br />
                {
                    singleInput.map((input, i) => {
                        const { type, name } = input;
                        return (
                            <>
                                <input
                                    type={type}
                                    name={name + i}
                                    placeholder={name + i}
                                    {...register(name + i)}
                                />
                                <br /></>
                        );
                    })
                }
                <button onClick={addInput}>Add Item</button> <br />
                <select {...register("input")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="object">object</option>
                    <option value="other">other</option>
                    <option value="other2">other2</option>
                </select> <br />
                {
                    inputGroups.map((input, i) => {
                        const { type, name } = input;
                        return (
                            <>
                                <input
                                    type={type}
                                    name={name + i}
                                    placeholder={name}
                                    {...register(name)}
                                />
                                <br />
                            </>
                        );
                    })
                }
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;