package com.tyss.talenthunt.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table
public class ScheduleInterviewBean implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "interview_Id")
	private int interviewId;
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name = "created_Date")
	@CreationTimestamp
	private Date createdDate;
	@Column(name = "interview_location")
	private String interviewlocation;
	@Column(name = "interview_type")
	private String interviewtype;
	@Column(name = "skills")
	private String skills;
	@Column(name = "status")
	private String status;
	@Column(name = "remarks")
	private String remarks;
	@Column(name = "interviewer")
	private String interviewer;
	
	 @JsonIgnore
	 @ManyToOne(cascade =  CascadeType.ALL)
	 @JoinColumn(name="requirmentId")
	 private AddRequirment requirment;
	 
	 @JsonIgnore
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "interview")
	 private List<CandidateCreation> candidate;
	 
	 
}
