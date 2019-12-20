package com.tyss.talenthunt.dto;

import java.util.List;


import lombok.Data;

@Data
public class Response {

	private int statusCode;
	private String message;
	private String clientId;
	private boolean status;
	private List<AddRequirment> add;
	private List<CandidateCreation> candidate1;
	private List<ScheduleInterviewBean> interview1;
}
