#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const cdk_remaster_first_app_stack_1 = require("../lib/cdk-remaster-first-app-stack");
const app = new cdk.App();
new cdk_remaster_first_app_stack_1.CdkRemasterFirstAppStack(app, 'CdkRemasterFirstAppStack', {
/* If you don't specify 'env', this stack will be environment-agnostic.
 * Account/Region-dependent features and context lookups will not work,
 * but a single synthesized template can be deployed anywhere. */
/* Uncomment the next line to specialize this stack for the AWS Account
 * and Region that are implied by the current CLI configuration. */
// env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
/* Uncomment the next line if you know exactly what Account and Region you
 * want to deploy the stack to. */
// env: { account: '123456789012', region: 'us-east-1' },
/* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXJlbWFzdGVyLWZpcnN0LWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNkay1yZW1hc3Rlci1maXJzdC1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyxzRkFBK0U7QUFFL0UsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSx1REFBd0IsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUU7QUFDNUQ7O2lFQUVpRTtBQUVqRTttRUFDbUU7QUFDbkUsNkZBQTZGO0FBRTdGO2tDQUNrQztBQUNsQyx5REFBeUQ7QUFFekQsOEZBQThGO0NBQy9GLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDZGtSZW1hc3RlckZpcnN0QXBwU3RhY2sgfSBmcm9tICcuLi9saWIvY2RrLXJlbWFzdGVyLWZpcnN0LWFwcC1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgQ2RrUmVtYXN0ZXJGaXJzdEFwcFN0YWNrKGFwcCwgJ0Nka1JlbWFzdGVyRmlyc3RBcHBTdGFjaycsIHtcbiAgLyogSWYgeW91IGRvbid0IHNwZWNpZnkgJ2VudicsIHRoaXMgc3RhY2sgd2lsbCBiZSBlbnZpcm9ubWVudC1hZ25vc3RpYy5cbiAgICogQWNjb3VudC9SZWdpb24tZGVwZW5kZW50IGZlYXR1cmVzIGFuZCBjb250ZXh0IGxvb2t1cHMgd2lsbCBub3Qgd29yayxcbiAgICogYnV0IGEgc2luZ2xlIHN5bnRoZXNpemVkIHRlbXBsYXRlIGNhbiBiZSBkZXBsb3llZCBhbnl3aGVyZS4gKi9cblxuICAvKiBVbmNvbW1lbnQgdGhlIG5leHQgbGluZSB0byBzcGVjaWFsaXplIHRoaXMgc3RhY2sgZm9yIHRoZSBBV1MgQWNjb3VudFxuICAgKiBhbmQgUmVnaW9uIHRoYXQgYXJlIGltcGxpZWQgYnkgdGhlIGN1cnJlbnQgQ0xJIGNvbmZpZ3VyYXRpb24uICovXG4gIC8vIGVudjogeyBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULCByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTiB9LFxuXG4gIC8qIFVuY29tbWVudCB0aGUgbmV4dCBsaW5lIGlmIHlvdSBrbm93IGV4YWN0bHkgd2hhdCBBY2NvdW50IGFuZCBSZWdpb24geW91XG4gICAqIHdhbnQgdG8gZGVwbG95IHRoZSBzdGFjayB0by4gKi9cbiAgLy8gZW52OiB7IGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLCByZWdpb246ICd1cy1lYXN0LTEnIH0sXG5cbiAgLyogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL2xhdGVzdC9ndWlkZS9lbnZpcm9ubWVudHMuaHRtbCAqL1xufSk7Il19