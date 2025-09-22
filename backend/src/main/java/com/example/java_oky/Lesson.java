package com.example.java_oky;

public class Lesson {
	public int id;
	public String title;
	public String description;
	public String duration;
	public String[] topics;
	public String theory;
	public String exercise;

	public Lesson(int id, String title, String description, String duration, String[] topics, String theory, String exercise) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.topics = topics;
		this.theory = theory;
		this.exercise = exercise;
	}
}
