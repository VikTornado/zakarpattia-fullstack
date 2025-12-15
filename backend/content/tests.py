from django.test import TestCase, override_settings
from django.urls import reverse


class ContactAPITest(TestCase):
	@override_settings(EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend', CONTACT_RECIPIENTS=['test@example.com'])
	def test_contact_endpoint_sends_email(self):
		url = reverse('contact')
		data = {'name': 'Tester', 'email': 'tester@example.com', 'message': 'Hello world'}
		response = self.client.post(url, data, content_type='application/json')
		self.assertEqual(response.status_code, 200)

	def test_contact_requires_fields(self):
		url = reverse('contact')
		response = self.client.post(url, {'name': '', 'email': '', 'message': ''}, content_type='application/json')
		self.assertEqual(response.status_code, 400)
