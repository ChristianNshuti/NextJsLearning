"use client";

import { useState } from "react";
import styles from "@/styles/create-project.module.css";

export default function CreateProjectPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Planning");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject = {
      name,
      description,
      status,
    };

    console.log("New Project:", newProject);

    alert("Project created successfully!");

    setName("");
    setDescription("");
    setStatus("Planning");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Create Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <input
            className={styles.input}
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <textarea
            className={styles.textarea}
            placeholder="Project Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <select
            className={styles.select}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>Planning</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button
            className={styles.button}
            type="submit"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}