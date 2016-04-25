// wrapper functions for coremetrics
function cmCreatePageviewTagCX(pageId, categoryId, searchTerm, resultsReturned, coreAttList) {
		try {
			if(document.domain.indexOf('cathaypacific.com') !== -1){
				var cookie_domain = "cathaypacific.com"
			}else{
				var cookie_domain = "dragonair.com"
			}

			cmSetClientID(cm_ClientID, true, 'data.coremetrics.com', cookie_domain);
			cmCreatePageviewTag(pageId, categoryId, searchTerm, resultsReturned, coreAttList); 
		} catch (e) {
		}
}

function cmCreateConversionEventTagCX(eventId, step, category, points, attributes) {
		try {
			cmCreateConversionEventTag(eventId, step, category, points, attributes);
		} catch (e) {
		}
}

function cmCreateElementTagCX(elementId, categoryId) {
		try {
			cmCreatePageElementTag(elementId, categoryId, null, null, null, null);
		} catch (e) {
		}
}

function cmCreateElementTagCX(elementId, categoryId, elementAttList) {
		try {
			cmCreatePageElementTag(elementId, categoryId, null, null, null, elementAttList);
		} catch (e) {
		}
}

function cmCreateManualLinkClickTagCX(href,name,pageID) {
		try {
			cmCreateManualLinkClickTag(href,name,pageID);
		} catch (e) {
			
		}
}

function cmCreateRegistrationTagCX(customerID, customerEmail, customerCity, customerState, customerZIP, customerCountry, attributes) {
		try {
			cmCreateRegistrationTag(customerID, customerEmail, customerCity,
					customerState, customerZIP, customerCountry, attributes);
		} catch (e) {
			
		}
}

function cmCreateManualImpressionTagCX(pageID, trackSP, trackRE){
		try {
			 cmCreateManualImpressionTag(pageID, trackSP, trackRE)
		} catch (e) {
		}
}