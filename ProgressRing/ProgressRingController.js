({
	init : function(component, event, helper) {
        $A.enqueueAction(component.get('c.update'));
	},
    update : function(component, event, helper) {
        var percent = component.get('v.percent') / 100;
        var variant = component.get('v.variant');
        
        //if (percent >= 1 && variant != 'complete') {
        //    component.set('v.variant', 'complete');
        //    return;
        //}
        
        if (percent < 1 && variant == 'complete') {
            component.set('v.percent', '100');
            return;
        }
        
        var isLong = percent > 0.5 ? 1 : 0;
        var arcX = Math.cos(2 * Math.PI * percent);
        var arcY = Math.sin(2 * Math.PI * percent);
        var path = 'M 1 0 A 1 1 0 ' + isLong + ' 1 ' + arcX + ' ' + arcY + ' L 0 0';
        
        component.set('v.svg', '<svg viewBox="-1 -1 2 2"><path class="slds-progress-ring__path" d="' + path + '" /></svg>');
    }
})
